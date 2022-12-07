class CartItemsController < ApplicationController
    include CurrentCart
    before_action :set_cart, only: [:create]
    before_action :set_cart_item, only: %i[ edit update destroy ]

    def new
        @cart_item = LineItem.new
    end

    def create
        product = Product.find(params[:product_id])
        @cart_item = @cart.add_product(product, params[:product][:quantity])
       #debugger
        if @cart_item.save
            flash[:notice] = "Item added to cart."
            redirect_to @cart_item.cart
        else
            render 'new'
        end
    end

    def edit

    end

    def update
       respond _to do |format|
        if @cart_item.update(cart_item_params)
            format.html { redirect_to @cart_item.cart, notice: "Cart Item was successfully updated." }
            format.json { render :show, status: :ok, location: @cart_item }
        else
        end
        end

    end

    def destroy
        #debugger
        @cart = Cart.find(session[:cart_id])
        @cart_item.destroy
            respond_to do |format|
            format.html { redirect_to cart_path(@cart),  notice: "Item was succesfully Deleted."}
            format.json { head :no_content }
        end
    end   

    private

    def set_cart_item
        @cart_item = LineItem.find(params[:id])
      end

    def cart_item_params
        params.require(:line_item).permit(:product.id, :cart_id, :quantity)
    end
    
end
