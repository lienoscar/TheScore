class HomeController < ApplicationController
	def nfl
		@nfl_data = JSON.parse(File.read([Rails.root, 'public/rushing.json'].join('/')))
		@nfl_data_header = @nfl_data.first.keys
		render component: 'App', props: { data: @nfl_data, header: @nfl_data_header }
	end

	def export_csv
		require 'csv'
		
		#sort data based on sortBy and filteredName
		@nfl_data = JSON.parse(File.read([Rails.root, 'public/rushing.json'].join('/')))
		
		#Get csv file headers
		@headers = @nfl_data.first.keys

		#Sort by fields unless sort_by is blank
		@nfl_data.sort_by! { |data| data[params[:sort_by]].to_s.gsub(/[,T]/, '').to_i } unless params[:sort_by].blank?

		#Filter by name unless filtered_name is blank
		@nfl_data.delete_if { |data| !(data['Player'] =~ /#{params[:filtered_name]}/i) } unless params[:filtered_name].blank?

		#Generate csv file
		@csv_file = CSV.generate(headers: true) do |csv|
			csv << @headers
			@nfl_data.each do |data|
				csv << data.values
			end
		end

		respond_to do |format|
			format.html
			format.csv { send_data @csv_file, filename: 'NFL_Data.csv', type: 'document' }
		end
	end
end
