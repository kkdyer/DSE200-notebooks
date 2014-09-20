require 'rubygems'
require 'nokogiri'   # Nokogiri in an add-on, installed with: gem install nokogiri
require 'open-uri'
require 'csv'
	sightUrl = Array.new
	sightDesc = Array.new
	latitudes = Array.new
	longitudes = Array.new
	urls = Array.new
	urls[1][0] = "Mumbai (Bombay)"
	urls[1][1] = "http://www.lonelyplanet.com/india/mumbai-bombay"
	index = 1
	urls[index][1] += '/sights'
	page = open(urls[index][1]).read
	latitudes = page.scan(/"latitude":(.+?),/)
	longitudes = page.scan(/"longitude":(.+?),/)
	doc = Nokogiri::HTML(open(urls[index][1]))
	doc.css('ol#globalList > li.sights > div.left > h2 > a').each do |sight|
		sights << sight.content
		sightUrl << sight['href']
	end
	doc.css('ol#globalList > li.sights > div.left > div.listDesc > p').each do |desc|
		sightDesc << desc.content
	end	
	CSV.open("LP_mumbai.csv", "wb") do |row|		
		row << ["Place", "PlaceUrl", "Sight", "SightUrl", "SightDescription", "SightLatitude", "SightLongitude"]
		(0..sights.length - 1).each do |sightIndex|
			row << [urls[index][0], urls[index][1], sights[sightIndex], sightUrl[sightIndex], sightDesc[sightIndex], latitude[sightIndex], longitude[sightIndex]]
		end
		puts sights
	end
	

