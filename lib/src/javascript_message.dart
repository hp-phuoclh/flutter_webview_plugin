/// A message that was sent by JavaScript code running in a [WebView].

class JavascriptMessage {
  /// Constructs a JavaScript message object.
  ///
  /// The `message` parameter must not be null.
  const JavascriptMessage(this.message, {this.handlerName}) : assert(message != null);

  /// The contents of the message that was sent by the JavaScript code.
  final String message;
  final String handlerName;

  @override
  String toString() {
    return 'JavascriptMessage{message: $message, handlerName: $handlerName}';
  }


}
