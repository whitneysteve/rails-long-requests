Long Running Requests in Rails
==============================

This is the source code for a blog post about running long running requests in Rails.

The blog is a React app created using [Facebook's create-react-app](https://github.com/facebook/create-react-app).

The sample app is a Ruby on Rails application.

You can view the blog post [here](http://TODO).

Working on the code
-------------------

Working on this usually follows the following pattern. You'll need [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating), [`rvm`](https://rvm.io/rvm/install) and to run `./setup` to set up.

Create a branch
...............

`./branch <branch_name>`

Usually I make some changes.

Run Blog Site Locally
.....................

`./run_blog`

This will start a development server and reload as appropriate.

Run Test Code Locally
.....................

`./run_rails`

This will start the rails development server.

Run Linter
..........

`./lint`

Commit, or Ship
...............

If you want to commit and keep working run:

`./commit`

If you want to commit and are done, ship it!

`./ship`

The build folder is checked in for deployment on GitHub pages.