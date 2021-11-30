# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Movie.delete_all
Brand.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('movies')
ActiveRecord::Base.connection.reset_pk_sequence!('brands')

u1=User.new
u1.username='mickeymouse'
u1.password='imagination'
u1.save

b1=Brand.new
b1.name='Disney'

# brand buttons
file1 = open('https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4')
b1.button_video.attach(io: file1, filename: 'disneyButton.mp4')
b1.save

