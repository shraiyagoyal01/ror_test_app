class ApplicationController < ActionController::Base
  before_action :authenticate_user!
   
  include CurrentCart
  before_action :set_cart 

  before_action :set_work_categories

  def set_work_categories
      @w_categories =  Category.all
     
  end

end

