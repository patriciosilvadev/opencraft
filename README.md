OpenCraft
=========

Install
-------

Install the dependencies in a Python 3 virtual environment:

```
$ sudo apt-get install `cat debian_packages.lst`
$ mkvirtualenv -p /usr/bin/python3 opencraft
$ pip install -r requirements.txt
```


Configure
---------

Customize the sample settings file:

```
$ cp opencraft/local_settings.sample opencraft/local_settings.py
$ gvim opencraft/local_settings.py
```


Run
---

To start the development environment server, first ensure that your migrations and static files
are up to date:

```
$ ./manage.py migrate
$ ./manage.py collectstatic --noinput
```

Then run the main web server (Django):

```
$ ./manage.py runserver_plus
```

And, in a separate window, the server used to serve websockets (Tornado):

```
$ ./server.py
```

Then go to:

* User interface: [http://localhost:2000/](http://localhost:2000/)
* API: [http://localhost:2000/api/](http://localhost:2000/api/)
* Admin: [http://localhost:2000/admin/](http://localhost:2000/admin/)

Default configuration specific to the development environment is stored in `opencraft/dev.py`.


Production
----------

For the production environment, use the `prod` settings:

```
$ ./manage.py print_settings --settings=prod
```


Ansible worker queue
--------------------

Install ansible and the configuration repository:

```
$ cd .. # Go outside of the current repository
$ git clone https://github.com/edx/configuration.git
$ cd configuration
$ mkvirtualenv edx-configuration
$ pip install -r requirements.txt
```

Then configure the _Ansible worker queue_ section in `local_settings.py`. You will need access to
an OpenStack API and a domain hosted on Gandi.

To run the jobs queue:

```
$ ./manage.py run_huey
```


Debug
-----

To access the console, you can use `shell_plus`:

```
$ ./manage.py shell_plus

Python 3.4.3 (default, Mar 26 2015, 22:03:40)
Type "copyright", "credits" or "license" for more information.

IPython 3.1.0 -- An enhanced Interactive Python.
?         -> Introduction and overview of IPython's features.
%quickref -> Quick reference.
help      -> Python's own help system.
object?   -> Details about 'object', use 'object??' for extra details.

In [1]: from instance.tasks import provision_sandbox_instance

In [2]: result = provision_sandbox_instance(
    sub_domain='badges.sandbox',
    name='Badges',
    s3_access_key='XXX',
    s3_secret_access_key='XXX',
    s3_bucket_name='sandbox-edxapp-storage',
)
```
