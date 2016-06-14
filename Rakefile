Version = "0.2.0"

desc "Uploads to s3"
task :upload do
  Dir.foreach("build") do |file|
    `aws s3 cp build/#{file} s3://todolist-local/#{Version}/#{file}`
  end
end
