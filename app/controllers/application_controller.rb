class ApplicationController < ActionController::Base
def hello
    renders html: 'Hello World!'
end
end
