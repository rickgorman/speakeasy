## Speakeasy

A chrome plugin that polls a given url for text to speak through chrome's amazing chrome.tts api.

## Use Cases

* Announce recent sales on a loud speaker
* Announce recent tweets for a given hashtag
* Announce deployment of new features

## Getting Started

* [Manually Install](https://blog.hunter.io/how-to-install-a-chrome-extension-without-using-the-chrome-web-store-31902c780034) the chrome plugin.
* Create an API endpoint that exports a JSON object formatted like so:
  ```javascript
  [
    {text: 'one'},
    {text: 'two'},
    {text: 'three'}
  ]
  ```
Here's an example of a sinatra/ruby endpoint:

```ruby
require 'json'

get "/speakeasy/new.json" do
  utterances = []
  utterances << {:text => 'hey how you doin?'}
  utterances << {:text => '...ahh you know, not too bad man. hows the family?'}
  utterances << {:text => '...not bad, not bad.'}
  utterances << {:text => "...Knock knock."}

  utterances.to_json
end
```
## Todo

* Make config changes work without having to disable/reenable plugin.

## License

[WTFPL](http://wtfpl.net)
