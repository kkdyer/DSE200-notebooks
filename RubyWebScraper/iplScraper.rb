require 'rubygems'
require 'nokogiri'
require 'mechanize'   
require 'open-uri'
require 'csv'

a = Mechanize.new { |a|
	# if site refreshes after login
	a.follow_meta_refresh = true
	a.ssl_version, a.verify_mode = 'SSLv3', OpenSSL::SSL::VERIFY_NONE
	a.agent.http.verify_mode = OpenSSL::SSL::VERIFY_NONE
}

a.get('http://www.facebook.com/') do |page|
#signin_page = a.click(page.link_with(:text => /Sign in/))
my_page = page.form_with(:id => 'login_form') do |form|
form.field_with(:name => 'email').value  = "nitin.agarwal123454"
form.field_with(:name => 'pass').value = "sairam#99"
end.submit

puts my_page
my_page2 = my_page.link_with(:text => /Nitin Agarwal/).click
#my_page3 = a.click(my_page2.link_with(:text => /Friends/))
my_page2.links.each do |link|
	text = link.text.strip
	next unless text.length > 0
	puts text
end
puts my_page2.form.fields
end