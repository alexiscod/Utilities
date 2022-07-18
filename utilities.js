/// This is an utility file that contains some useful functions
/// that can be used in any project.

var Utility = (function() {
    return {
        ShowAjaxError: function(failSafe, error) {
            var responseText = failSafe.responseText;

            var statusMessage = $.parseJSON(failSafe.responseText);
            if (statusMessage.status === 'failure') {
                responseText = statusMessage.message;
            } else if (!responseText) {
                responseText = error;
            } else if (responseText.indexOf('An unexpected error occurred') === -1 &&
                responseText.indexOf('The server is busy') === -1 && responseText.indexOf('valid') === -1) {
                responseText = error;
            }

            Utility.ShowError(responseText);
        },
        ShowError: function(message) {
            Utility.ShowInfo(message, 'Error');
        },
        ShowInfo: function(message, title, callback) {
            bootbox.dialog({
                message: message,
                title: title,
                buttons: {
                    ok: {
                        label: 'OK',
                        className: 'btn-primary',
                        callback: function() {
                            if (callback) {
                                callback();
                            }
                        }
                    }
                }
            });
        },
        ShowInfoNoClose: function(message, title) {
            bootbox.dialog({
                message: message,
                title: title,
                closeButton: false,
            });
        },
        ShowInfoClose: function(message, title, callback) {
            bootbox.dialog({
                message: message,
                title: title,
                closeButton: true,
                buttons: {
                    ok: {
                        label: 'Close',
                        className: 'btn-primary',
                        callback: function() {
                            if (callback) {
                                callback();
                            }
                        }
                    }
                }
            });
        },
        ShowConfirm: function(message, title, confirmCallback, cancelCallback) {
            bootbox.dialog({
                message: message,
                title: title,
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary',
                        callback: function() {
                            if (confirmCallback) {
                                window.setTimeout(function() { confirmCallback(); }, 500);
                            }
                        }
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-default',
                        callback: function() {
                            if (cancelCallback) {
                                window.setTimeout(function() { cancelCallback(); }, 500);
                            }
                        }
                    }
                }
            });
        },
        ShowConfirmOkCancel: function(message, title, confirmCallback, cancelCallback) {
            bootbox.dialog({
                message: message,
                title: title,
                className: 'text-justify',
                buttons: {
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-default',
                        callback: function() {
                            if (cancelCallback) {
                                window.setTimeout(function() { cancelCallback(); }, 500);
                            }
                        }
                    },
                    confirm: {
                        label: 'OK',
                        className: 'btn-primary',
                        callback: function() {
                            if (confirmCallback) {
                                window.setTimeout(function() { confirmCallback(); }, 500);
                            }
                        }
                    }
                }
            });
        },
    };
})();