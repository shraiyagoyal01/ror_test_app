module Admin
    class ProductsController < Admin::ApplicationController
    before_action :set_product, only: [:show, :edit, :update, :destroy]

        def show
        end

        def update_subcategories
          @subcategories = Category.where("parent_id = ?", params[:parent_id])
          respond_to do |format|
            format.json { render :json => @subcategories }
          end
        end 
        
        def new
          @product = Product.new
          @categories = Category.where(parent_id: nil)
          @category = Category.where.not(parent_id: nil)
        end

        def edit
          
        end

        def update
          #debugger
          if @product.update(product_params)
            flash[:notice] = "Product was successfully updated."
            redirect_to admin_product_path(@product)
          else
            render 'edit'  
          end 
        end
        

        def create
          #debugger
          @product = Product.new(product_params)
            if @product.save
              flash[:notice] = "Product was successfully created."
              redirect_to admin_product_path(@product)
            else
              render 'new'
            end
        end


        

        private

        def set_product
          @product = Product.find(params[:id])
        end

        def product_params
          params.require(:product).permit(:title, :price, :quantity, :model, :description, :brand, :finish, :condition, :image, category_ids: [])
        end

        
    end
  end
  