require 'rubygems'
require 'nokogiri'   
require 'open-uri'
require 'csv'

######################################################################################################################
# Code in commments immediately below is used to get links of Lonely Planet pages corresponding to all places in India 
# and save these urls in a csv file called LPlinks.csv
######################################################################################################################

#doc = Nokogiri::HTML(open('http://www.lonelyplanet.com/india/places'))

#places = Array.new 
#urls = Array.new

#doc.css('div#contentBody > ul > li > a').each do |place|
	#places << place.content
	#place['href']+='/sights'
	#puts place['href']
	#urls << place['href']
#end

# Store the links in a csv file
#CSV.open("LPlinks.csv", "wb") do |row|
 # row << ["Place", "Link"]
  #(0..places.length - 1).each do |index|
   # row << [places[index], urls[index]]
  #end
#end

# Read links from csv and parse them accordingly
urls = CSV.read("LPlinks.csv")
CSV.open("LPinfo.csv", "wb") do |row|		#csv is getting overwritten
	row << ["Place", "PlaceUrl", "Sight", "SightUrl", "SightDescription", "SightLatitude", "SightLongitude"]
	(0..urls.length - 1).each do |index|
		urls[index][1] += '/sights'
		sights = Array.new
		sightUrl = Array.new
		sightDesc = Array.new
		latitudes = Array.new
		longitudes = Array.new
		puts urls[index][1]
		page = open(urls[index][1]).read
		latitudes = page.scan(/"latitude":["(.+?)"],/)
		longitudes = page.scan(/"longitude":["(.+?)"],/)
		doc = Nokogiri::HTML(open(urls[index][1]))
		doc.css('ol#globalList > li.sights > div.left > h2 > a').each do |sight|
			sights << sight.content
			sightUrl << sight['href']
		end
		doc.css('ol#globalList > li.sights > div.left > div.listDesc > p').each do |desc|
			sightDesc << desc.content
		end	
		(0..sights.length - 1).each do |sightIndex|
			row << [urls[index][0], urls[index][1], sights[sightIndex], sightUrl[sightIndex], sightDesc[sightIndex], latitudes[sightIndex], longitudes[sightIndex]]
		end
		puts sights
	end
end