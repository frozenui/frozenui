# Require any additional compass plugins here.
require 'compass/import-once/activate'
# Set this to the root of your project when deployed:
# base_path = "../src/"
http_path="../../"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"
sprite_load_path = "../src/sprite"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:

sourcemap = true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
# on_sprite_saved do |filename|
#   if File.exists?(filename)
#     FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
#     #FileUtils.mv filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
#   end
# end

# on_stylesheet_saved do |filename|
#   if File.exists?(filename)
#     # css = File.read filename
#     css = File.open(filename, 'rb').readlines.join
#     File.open(filename, 'wb+') do |buffer|
#       # buffer << css.gsub(%r{-s[a-z0-9]{10}\.png}, '.png')
#       buffer.write(css.gsub(%r{-s[a-z0-9]{10}\.png}, '.png'))
#     end
#     # css2 = File.open(filename, 'rb').readlines.join
#     # File.open(filename, 'w') { |io| io << AutoprefixerRails.process(css2) }
#   end
# end


module Compass::SassExtensions::Functions::Sprites
  def sprite_url(map)
    verify_map(map, "sprite-url")
    map.generate
    generated_image_url(Sass::Script::String.new(map.name_and_hash))
  end
end

module Compass::SassExtensions::Sprites::SpriteMethods
  def name_and_hash
    "#{path}.png"
  end

  def cleanup_old_sprites
    Dir[File.join(::Compass.configuration.generated_images_path, "#{path}.png")].each do |file|
      log :remove, file
      FileUtils.rm file
      ::Compass.configuration.run_sprite_removed(file)
    end
  end
end

module Compass
  class << SpriteImporter
    def find_all_sprite_map_files(path)
      glob = "*{#{self::VALID_EXTENSIONS.join(",")}}"
      Dir.glob(File.join(path, "**", glob))
    end
  end
end