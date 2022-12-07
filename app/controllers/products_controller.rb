class ProductsController < ApplicationController
    before_action :set_product, only: [:show, :edit, :update, :destroy]
        
    def index
        @products = Product.all
    end
 
    def show
    end

    def new
    end

    def create
    end

    def edit
    end
 
    def update
      # debugger
        if @product.update(params.require(:product).permit(:quantity))
          flash[:notice] = "Product was successfully updated."
          redirect_to cart_items_path
        else
          render 'edit'  
        end 
      
    end

    private

    def set_product
      @product = Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:Title, :Price, :Quantity, :Model, :Description, :Category, :Brand, :Finish, :Condition, :image)
    end

end