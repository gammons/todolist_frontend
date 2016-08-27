Version = "0.3.0"

desc "Uploads to s3"
task :build do
  system `rm -rf build/*`
  system `npm run build`
end

task :upload do
  `mv build/common*.js build/common.js`
  `mv build/main*.js build/main.js`
  `mv build/main*.css build/main.css`

  Dir.foreach("./build") do |file|
    `aws s3 cp build/#{file} s3://todolist-local/#{Version}/#{file} --acl public-read`
  end
end

desc "Uploads the demo to s3"
task :upload_demo do
  `mv build/common*.js build/common.js`
  `mv build/main*.js build/main.js`
  `mv build/main*.css build/main.css`

  Dir.foreach("./build") do |file|
    `aws s3 cp build/#{file} s3://todolist-demo/#{Version}/#{file} --acl public-read`
  end
end
