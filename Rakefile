Version = "0.6.1"

desc "Builds the production app"
task :build do
  system `rm -rf build/*`
  system `yarn run build`
end

desc "Uploads to S3"
task :upload do
  Dir.foreach("./build") do |file|
    next if [".",".."].include?(file)
    `aws s3 cp build/#{file} s3://todolist-local/#{Version}/#{file} --acl public-read`
  end
end

desc "Uploads the demo to s3"
task :upload_demo do
  Dir.foreach("./build") do |file|
    `aws s3 cp build/#{file} s3://todolist-demo/#{file} --acl public-read`
  end
end

task default: [:build, :upload]
