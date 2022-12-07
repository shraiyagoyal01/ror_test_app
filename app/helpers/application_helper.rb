module ApplicationHelper
    include FontAwesome::Rails::IconHelper


    def fa_icon icon_name, text
        content_tag(:i, text, class: "fa fa-#{icon_name}")
      end 
      
    def cart_count_over_one
      if @cart.line_items.count > 0 
        return "<span class='tag is-dark'>#{@cart.line_items.count}</span>".html_safe
      end
    end
    
    
    def cart_has_items
      return @cart.line_items.count > 0
    end


end
