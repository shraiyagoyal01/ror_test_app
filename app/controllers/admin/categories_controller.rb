module Admin
  class CategoriesController < Admin::ApplicationController
    
    def index
      @category = Category.all
      # @categories = Category.find(:all, :conditions => {:parent_id => nil})
    end

    def show
      @category = Category.find(params[:id])
    end

    def new
      @category = Category.new
      @categories = Category.where(parent_id: nil)
    end

    
    def edit
      @category = Category.find(params[:id])
      @categories = Category.where(parent_id: nil)
    end


    def update
      @category = Category.find(params[:id])
      if @category.update(params.require(:category).permit(:name, :s_description, :l_description, :parent_id))
        flash[:notice] = "Category was successfully updated."
        redirect_to admin_category_path(@category)
      else
        render 'edit'  
      end 
    end


    def create
      @category = Category.new(params.require(:category).permit(:name, :s_description, :l_description, :parent_id))

      if @category.save
        flash[:notice] = "Category was successfully created."
        redirect_to admin_categories_path(@category)
      else
        render 'new'
      end
    end

    def destroy
      
      @category = Category.find(params[:id])
     
      @category.destroy
      flash[:notice] = " Category was succesfully deleted."
      redirect_to admin_categories_path
    end


  end
end
