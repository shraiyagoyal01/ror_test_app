class CategoriesController < ApplicationController

    def new
    end

    def create
    end

    def edit
    end
 
    def update
    end
    
    def index
        @categories = Category.all
    end
 
    def show
        
        @category = Category.find(params[:id])
        # @category.products
        # debugger
       
    end


end