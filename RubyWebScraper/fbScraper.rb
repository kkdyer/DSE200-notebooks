require_relative 'FbConsole.rb'

fb = FbConsole.new
fb.login("thunderbooolt@gmail.com","sairam#99")
fb.notifications()
fb.Home
fb.feed_items(most_recent = true)
fb.update_status("I am a hunter")