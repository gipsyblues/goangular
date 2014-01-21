### v3.0.1

- Fixing Getting-Started Links

### v3.0.0

- The $goKey service is now available, it is used to create a Model.  The Model
is associated to a position in an application GoInstant data structure.  It provides
methods for accessing, manipulating and synchronizing local and remote data.
- The GoAngular service used for automatically synchronizing an entire scope
has been deprecated in favor of extending $goKey.

### v2.0.0

- goConnection has replaced platformProvider, with the introduction of promises
to the goinstant API, goConnection now provides a simple way to access user,
rooms and keys.
- A number of services have been made redundant with promises in core, they've been removed.

### v1.0.2

- platformProvider now accepts a user parameter vs a token parameter

### v1.0.1

- Resolving an error users encountered when attempting to connect using default `rooms` & `token` values.

### v1.0.0

- The beginning of time.