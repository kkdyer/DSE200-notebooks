require 'benchmark'
 
$count = 0
 
def to_the_end(agent)
  
  # Check if we have bottomed out (no more sub-category links)
  if agent.page.at("#sections/div[@class='acw apm']/span[@class='mfss fcg']").nil?      
 
    # Find the unique identifier (a friend's name), which we'll use to find their profile links
    agent.page.search("#sections/div/div[@class='abt acw']/div[@class='ib']/div/a/span").each do |friend_name| 
      agent.page.link_with(:text => friend_name.text.strip).click   # Visit each profile
      puts "--- Profile #{agent.page.title}... "                    # Perform some action ('i was here' to console)
      $count += 1
      agent.history.pop                                             # Unvisit each profile 
    end    
    return
  end
  
  # Need to click more subdivisions yet
  
  subdivisions = agent.page.at("#sections/div[@class='acw apm']/span[@class='mfss fcg']").text.split("\u00B7")
  subdivisions.each do |i|
    agent.page.link_with(:text => i.strip).click
    to_the_end(agent)  
    agent.history.pop     # Backtrack up the tree
  end
end
  
#-------------- Activation --------------------
console = FbConsole.new
console.login('email', 'password')
 
console.Profile
console.agent.page.link_with(:text => 'Info').click
console.agent.page.link_with(:text => /Total Friends/).click
 
time = Benchmark.realtime do
  to_the_end(console.agent)
end
 
puts "\nVisited #{$count} profiles:  #{time} seconds"
puts "#{time/$count*1000} ms per profile average."