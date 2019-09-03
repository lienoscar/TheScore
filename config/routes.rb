Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #set root path
  root 'home#nfl'
  post 'home/export_csv'
end
