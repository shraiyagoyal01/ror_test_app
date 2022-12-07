class CartsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :invalid_cart
  

    def show
      @cart = Cart.find(params[:id])
    end

    
    def destroy
      @cart.destroy if @cart.id == session[:cart_id]
      session[:cart_id] = nil
      flash[:notice] = "Cart was successfully destroyed."
      redirect_to root_path
      
    end
    
  private

  def invalid_cart
    logger.error "Attempt to access invalid cart #{params[:id]}"
    redirect_to root_path, notice: "That cart doesn't exist"
  end

end
