// Goals:
// • Simple API.
// • Many-to-many mappings.
// • Tagging - arbitrary definitions of publish types.
//  - Enable ability to listen to specific publishers, tags, or both.
// • Register listeners from a publisher (?)
// • ES5 and above.

(function() {
	window.QMS = window.QMS || {};

	var publishers = [{
			name: 'generic',
			tags: ['generic', 'global']
		}],

		subscribers = [{
			name: 'generic',
			subscriptions: {
				publishers: ['generic'],
				tags: ['generic', 'global']
			}
		}],

		// check if a given thing is an array.  If not, make it one.
		convertValueToArray = function(value) {
			if (!Array.isArray(value)) {
				return [value];
			} else if (typeof value === 'string') {
				return value;
			} else {
				throw 'Value must be a string or array';
			}
		};

		window.QMS.addPublisher = function(publisherData) {
			publisherData.tags = convertValueToArray(publisherData.tags);

			publishers.push(publisherData);
		};

		window.QMS.addSubscriber = function(subscriberData) {
			subscriberData.publishers.tags = convertValueToArray(subscriberData.publishers.tags);

			subscriberData.subscriptions.tags = convertValueToArray(subscriberData.subscriptions.tags);

			subscribers.push(subscriberData);
		};

		window.QMS.emit = function(eventData) {
			
		};

}());