speakeasy
=========


Example of sinatra/ruby handler:


```ruby
require 'json'

get "/speakeasy/new.json" do
  utterances = {}
  utterances << {:text => 'hey how you doin?'}
  utterances << {:text => '...ahh you know, not too bad man. hows the family?'}
  utterances << {:text => '...cat died.'}
  utterances << {:text => "...ahh shit. I'm all out of dead cat jokes."}

  utterances.to_json
end
```
