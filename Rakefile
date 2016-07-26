task :default => :server

desc 'Clean the output directory'
task :clean do
  sh 'rm -rf build'
end

desc 'Start local server'
task :server do
  bundle 'middleman'
end

desc 'Build site'
task :build => [:clean] do
  bundle 'middleman build'
end

desc 'Deploy site'
task :deploy do
  bundle 'middleman deploy'
end



def bundle(opts = '')
  sh 'bundle exec ' + opts
end

# Hook into the rails deployment process
namespace :assets do
  task :precompile do
    bundle 'middleman build'
  end
end
