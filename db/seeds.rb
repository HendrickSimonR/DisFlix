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

# Demo 
u1=User.new
u1.username='mickeymouse'
u1.password='imagination'
u1.save

#Brands
b1=Brand.new
b1.name='Disney'

b2=Brand.new
b2.name='Pixar'

b3=Brand.new
b3.name='Marvel'

b4=Brand.new
b4.name='Star Wars'

b5=Brand.new
b5.name='National Geographic'

b1.save
b2.save
b3.save 
b4.save 
b5.save 

#movies

# m1=Movie.new
# m1.title='50 Years of Walt Disney World'
# m1.description=''
# m1.runtime='1h 24m'
# m1.rating='TV-PG'
# m1.year=2021
# m1.save 

#Disney

m1=Movie.new
m1.title='50 Years of Walt Disney World'
m1.description='In celebration of the 50th Anniversary of Walt Disney World Resort. Taking viewers on a historical journey spanning half a century and beyond at Walt Disney World in Florida.'
m1.runtime='1h 24m'
m1.rating='TV-PG'
m1.year=2021
m1.save 

m2=Movie.new
m2.title='Hercules'
m2.description='Taken from the gods as a newborn and adopted on earth, Hercules becomes an awkward teenage pillar of strength. He discovers he has a place on Mount Olympus with his dad Zeus—if he can endure his growing pains and move from "zero" to true hero. Along with Pegasus, the flying stallion, and Phil, a feisty personal trainer, Hercules is on a mission to stick it to Hades once and for all.'
m2.runtime='1h 38m'
m2.rating='G'
m2.year=1997
m2.save 

m3=Movie.new
m3.title='The Little Mermaid'
m3.description='Ariel, the fun-loving and mischievous mermaid, is enchanted with all things human. Disregarding her father’s order to stay away from the world above the sea, she strikes a bargain with a devious sea witch to trade her beautiful voice for legs. But can she also win a prince’s heart?'
m3.runtime='1h 26m'
m3.rating='G'
m3.year=1989
m3.save 

#PIXAR 

m4=Movie.new
m4.title='Monsters, Inc.'
m4.description='When a little girl named Boo wanders into their world, it’s the monsters who are scared silly. It’s up to Sulley and Mike, the top scare team, to keep her out of sight and get her back home.'
m4.runtime='1h 32m'
m4.rating='G'
m4.year=2001
m4.save 

m5=Movie.new
m5.title='Up'
m5.description='Retired balloon salesman Carl Fredricksen, part rascal and part dreamer, takes to the sky by tying thousands of balloons to his house. Unbeknownst to Carl, a young Wildnerness Explorer named Russell becomes an unexpected stowaway on the journey they never expected.'
m5.runtime='1h 36m'
m5.rating='PG'
m5.year=2009
m5.save 

m6=Movie.new
m6.title='Toy Story'
m6.description='Welcome to an astonishing world where toys play while their owners are away. Meet Woody, Buzz and all their friends in an adventure filled with humor, heart and friendship.'
m6.runtime='1h 23m'
m6.rating='G'
m6.year=1995
m6.save 

# MARVEL 

m7=Movie.new
m7.title='Black Panther'
m7.description='After the untimely passing of his father, the young T’Challa becomes the King of Wakanda.'
m7.runtime='2h 17m'
m7.rating='PG-13'
m7.year=2018
m7.save 

m8=Movie.new
m8.title='Avengers: Infinity War'
m8.description='With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers and their Super Hero allies risk everything in the ultimate showdown of all time.'
m8.runtime='2h 32m'
m8.rating='PG-13'
m8.year=2018
m8.save 

m9=Movie.new
m9.title='Avengers: Endgame'
m9.description='The epic conclusion to the Infinity Saga. After devastating events wiped out half the world’s population, the remaining heroes struggle to move forward. But they must come together to restore order and harmony in the universe and bring their loved ones back.'
m9.runtime='3h 4m'
m9.rating='PG-13'
m9.year=2019
m9.save 

#STAR WARS 

m10=Movie.new
m10.title='Star Wars: The Empire Strikes Back'
m10.description='The Rebels scatter after the Empire attacks their base on the ice planet Hoth. Han Solo and Princess Leia are pursued by Imperials, while Luke trains with Jedi Master Yoda to prepare for his battle with Darth Vader.'
m10.runtime='2h 7m'
m10.rating='PG'
m10.year=1980
m10.save 

m11=Movie.new
m11.title='Star Wars: Revenge of the Sith'
m11.description='Clone Wars rage across the galaxy. A sinister Sith Lord seizes control of the Republic and corrupts Anakin Skywalker to be his dark apprentice, Darth Vader. Now, in an epic lightsaber duel, Jedi Obi-Wan Kenobi must confront his fallen friend.'
m11.runtime='2h 20m'
m11.rating='PG-13'
m11.year=2005
m11.save 

m12=Movie.new
m12.title='Rogue One: A Star Wars Story'
m12.description='In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction.'
m12.runtime='2h 15m'
m12.rating='PG-13'
m12.year=2016
m12.save 

#NATIONAL GEOGRAPHIC

m15=Movie.new
m15.title='Continent 7: Antarctica'
m15.description='At -100 degrees F, you can burn up to 5,000 calories a day, and with winter at less than 1% humidity, your body will lose water just breathing. This is Antarctica, where close-knit communities of scientists, engineers, and hardened field vets have forged an existence unlike anything on our planet, fighting brutal conditions to conduct crucial science.'
m15.runtime='1 Season'
m15.rating='TV-PG'
m15.year=2016
m15.save 

m14=Movie.new
m14.title='Earth Moods'
m14.description='Escape everyday life with Earth Moods. Viewers relax and reset as they travel to blue glaciers, swirling dunes, bustling cities and lush rainforests.'
m14.runtime='1 Season'
m14.rating='TV-G'
m14.year=2021
m14.save 

m13=Movie.new
m13.title='Cosmos: Possible Worlds'
m13.description='COSMOS: POSSIBLE WORLDS is a wonder-filled voyage through humanity’s past, present and future, transporting viewers to lost worlds and worlds yet to be revealed by science.'
m13.runtime='1 Season'
m13.rating='TV-14'
m13.year=2020
m13.save 


# brand buttons
file1 = open('https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4')
b1.button_video.attach(io: file1, filename: 'disneyButton.mp4')

