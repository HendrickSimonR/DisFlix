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
u1.save!

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

b1.save!
b2.save!
b3.save! 
b4.save! 
b5.save!



#movies

# m1=Movie.new
# m1.title='50 Years of Walt Disney World'
# m1.description=''
# m1.runtime='1h 24m'
# m1.rating='TV-PG'
# m1.year=2021
# m1.save! 

puts "Generating movies..."

#Disney

m1=Movie.new
m1.title='50 Years of Walt Disney World'
m1.description='In celebration of the 50th Anniversary of Walt Disney World Resort. Taking viewers on a historical journey spanning half a century and beyond at Walt Disney World in Florida.'
m1.runtime='1h 24m'
m1.rating='TV-PG'
m1.year=2021
m1.brand_id=b1.id
m1.save! 

m2=Movie.new
m2.title='Hercules'
m2.description='Taken from the gods as a newborn and adopted on earth, Hercules becomes an awkward teenage pillar of strength. He discovers he has a place on Mount Olympus with his dad Zeus—if he can endure his growing pains and move from "zero" to true hero. Along with Pegasus, the flying stallion, and Phil, a feisty personal trainer, Hercules is on a mission to stick it to Hades once and for all.'
m2.runtime='1h 38m'
m2.rating='G'
m2.year=1997
m2.brand_id=b1.id
m2.save! 

m3=Movie.new
m3.title='The Little Mermaid'
m3.description='Ariel, the fun-loving and mischievous mermaid, is enchanted with all things human. Disregarding her father’s order to stay away from the world above the sea, she strikes a bargain with a devious sea witch to trade her beautiful voice for legs. But can she also win a prince’s heart?'
m3.runtime='1h 26m'
m3.rating='G'
m3.year=1989
m3.brand_id=b1.id
m3.save! 

#PIXAR 

m4=Movie.new
m4.title='Monsters, Inc.'
m4.description='When a little girl named Boo wanders into their world, it’s the monsters who are scared silly. It’s up to Sulley and Mike, the top scare team, to keep her out of sight and get her back home.'
m4.runtime='1h 32m'
m4.rating='G'
m4.year=2001
m4.brand_id=b2.id
m4.save! 

m5=Movie.new
m5.title='Up'
m5.description='Retired balloon salesman Carl Fredricksen, part rascal and part dreamer, takes to the sky by tying thousands of balloons to his house. Unbeknownst to Carl, a young Wildnerness Explorer named Russell becomes an unexpected stowaway on the journey they never expected.'
m5.runtime='1h 36m'
m5.rating='PG'
m5.year=2009
m5.brand_id=b2.id
m5.save! 

m6=Movie.new
m6.title='Toy Story'
m6.description='Welcome to an astonishing world where toys play while their owners are away. Meet Woody, Buzz and all their friends in an adventure filled with humor, heart and friendship.'
m6.runtime='1h 23m'
m6.rating='G'
m6.year=1995
m6.brand_id=b2.id
m6.save! 

# MARVEL 

m7=Movie.new
m7.title='Black Panther'
m7.description='After the untimely passing of his father, the young T’Challa becomes the King of Wakanda.'
m7.runtime='2h 17m'
m7.rating='PG-13'
m7.year=2018
m7.brand_id=b3.id
m7.save! 

m8=Movie.new
m8.title='Avengers: Infinity War'
m8.description='With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers and their Super Hero allies risk everything in the ultimate showdown of all time.'
m8.runtime='2h 32m'
m8.rating='PG-13'
m8.year=2018
m8.brand_id=b3.id
m8.save! 

m9=Movie.new
m9.title='Avengers: Endgame'
m9.description='The epic conclusion to the Infinity Saga. After devastating events wiped out half the world’s population, the remaining heroes struggle to move forward. But they must come together to restore order and harmony in the universe and bring their loved ones back.'
m9.runtime='3h 4m'
m9.rating='PG-13'
m9.year=2019
m9.brand_id=b3.id
m9.save! 

#STAR WARS 

m10=Movie.new
m10.title='Star Wars: The Empire Strikes Back'
m10.description='The Rebels scatter after the Empire attacks their base on the ice planet Hoth. Han Solo and Princess Leia are pursued by Imperials, while Luke trains with Jedi Master Yoda to prepare for his battle with Darth Vader.'
m10.runtime='2h 7m'
m10.rating='PG'
m10.year=1980
m10.brand_id=b4.id
m10.save! 

m11=Movie.new
m11.title='Star Wars: Revenge of the Sith'
m11.description='Clone Wars rage across the galaxy. A sinister Sith Lord seizes control of the Republic and corrupts Anakin Skywalker to be his dark apprentice, Darth Vader. Now, in an epic lightsaber duel, Jedi Obi-Wan Kenobi must confront his fallen friend.'
m11.runtime='2h 20m'
m11.rating='PG-13'
m11.year=2005
m11.brand_id=b4.id
m11.save! 

m12=Movie.new
m12.title='Rogue One: A Star Wars Story'
m12.description='In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction.'
m12.runtime='2h 15m'
m12.rating='PG-13'
m12.year=2016
m12.brand_id=b4.id
m12.save! 

#NATIONAL GEOGRAPHIC

m15=Movie.new
m15.title='Continent 7: Antarctica'
m15.description='At -100 degrees F, you can burn up to 5,000 calories a day, and with winter at less than 1% humidity, your body will lose water just breathing. This is Antarctica, where close-knit communities of scientists, engineers, and hardened field vets have forged an existence unlike anything on our planet, fighting brutal conditions to conduct crucial science.'
m15.runtime='1 Season'
m15.rating='TV-PG'
m15.year=2016
m15.brand_id=b5.id
m15.save! 

m14=Movie.new
m14.title='Earth Moods'
m14.description='Escape everyday life with Earth Moods. Viewers relax and reset as they travel to blue glaciers, swirling dunes, bustling cities and lush rainforests.'
m14.runtime='1 Season'
m14.rating='TV-G'
m14.year=2021
m14.brand_id=b5.id
m14.save! 

m13=Movie.new
m13.title='Cosmos: Possible Worlds'
m13.description='COSMOS: POSSIBLE WORLDS is a wonder-filled voyage through humanity’s past, present and future, transporting viewers to lost worlds and worlds yet to be revealed by science.'
m13.runtime='1 Season'
m13.rating='TV-14'
m13.year=2020
m13.brand_id=b5.id
m13.save!


# brand buttons
file1 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4')
b1.button_video.attach(io: file1, filename: 'disneyButton.mp4')


#movie_photos 
# mPhoto1 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m1.jpg') 
# mPhoto2 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m2.jpg') 
# mPhoto3 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m3.jpg') 
# mPhoto4 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m4.jpg') 
# mPhoto5 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m5.jpg') 
# mPhoto6 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m6.jpg') 
# mPhoto7 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m7.jpg') 
# mPhoto8 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m8.jpg') 
# mPhoto9 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m9.jpg') 
# mPhoto10 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m10.jpg') 
# mPhoto11 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m11.jpg') 
# mPhoto12 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m12.jpg') 
# mPhoto13 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m13.jpg') 
# mPhoto14 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m14.jpg') 
# mPhoto15 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m15.jpg') 


# m1.image.attach(io: mPhoto1, filename: 'm1.jpg')
# m2.image.attach(io: mPhoto2, filename: 'm2.jpg')
# m3.image.attach(io: mPhoto3, filename: 'm3.jpg')
# m4.image.attach(io: mPhoto4, filename: 'm4.jpg')
# m5.image.attach(io: mPhoto5, filename: 'm5.jpg')
# m6.image.attach(io: mPhoto6, filename: 'm6.jpg')
# m7.image.attach(io: mPhoto7, filename: 'm7.jpg')
# m8.image.attach(io: mPhoto8, filename: 'm8.jpg')
# m9.image.attach(io: mPhoto9, filename: 'm9.jpg')
# m10.image.attach(io: mPhoto10, filename: 'm10.jpg')
# m11.image.attach(io: mPhoto11, filename: 'm11.jpg')
# m12.image.attach(io: mPhoto12, filename: 'm12.jpg')
# m13.image.attach(io: mPhoto13, filename: 'm13.jpg')
# m14.image.attach(io: mPhoto14, filename: 'm14.jpg')
# m15.image.attach(io: mPhoto15, filename: 'm15.jpg')

m16=Movie.new
m16.title='Fantasia'
m16.description='Walt Disney`s timeless masterpiece is an extraordinary blend of classical music with innovative animation. Featuring eight sequences—see the music come to life and hear the pictures burst into song in this groundbreaking film.'
m16.runtime='2h 6m'
m16.rating='G'
m16.year=1940
m16.brand_id=b1.id
m16.save! 

m17=Movie.new
m17.title='High School Musical'
m17.description='East High is taken by storm when Troy, the star captain of the school`s basketball team, and Gabriella, a brainy new student, connect on a level that`s more than a school crush. When the two discover they might have a real passion for singing, they take their place in the spotlight, setting off a chain of events that puts all of East High into a musical frenzy.'
m17.runtime='1h 40m'
m17.rating='TV-G'
m17.year=2006
m17.brand_id=b1.id
m17.save! 

m18=Movie.new
m18.title='The Lion King'
m18.description='Celebrate the glory of The Lion King as this magnificent coming-of-age masterpiece takes its rightful place as the reigning star of the acclaimed Walt Disney Signature Collection!'
m18.runtime='1h 32m'
m18.rating='G'
m18.year=1994
m18.brand_id=b1.id
m18.save! 

m19=Movie.new
m19.title='Tarzan'
m19.description='An orphaned infant is raised by a family of gorillas and ultimately accepted as one of their own. As Tarzan matures into a young man, his life changes forever when he finally meets other humans, with whom he feels an immediate and irresistible bond.'
m19.runtime='1h 35m'
m19.rating='G'
m19.year=1999
m19.brand_id=b1.id
m19.save! 

m20=Movie.new
m20.title='Moana'
m20.description='Moana sets sail on a daring mission to save her people. Along the way, she meets the mighty demigod Maui–together they cross the ocean on a fun-filled, action-packed voyage from Walt Disney Animation Studios.'
m20.runtime='1h 49m'
m20.rating='PG'
m20.year=2016
m20.brand_id=b1.id
m20.save! 

m21=Movie.new
m21.title='Tangled'
m21.description='When the kingdom’s most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who’s looking to escape the tower where shes been locked away for years — the unlikely duo sets off on a hair-raising escapade.'
m21.runtime='1h 31m'
m21.rating='G'
m21.year=1991
m21.brand_id=b1.id
m21.save! 

m22=Movie.new
m22.title='Beauty and the Beast'
m22.description='Embark on an epic adventure with Belle, Beast, and all the characters you love, with the music you’ll never forget.'
m22.runtime='1h 31m'
m22.rating='G'
m22.year=1991
m22.brand_id=b1.id
m22.save! 

m23=Movie.new
m23.title='Wall-E'
m23.description='After hundreds of lonely years of doing what he was built for, the curious and lovable robot WALL-E discovers a new purpose in life when he meets a sleek robot named EVE. Join them and a hilarious cast of characters on a journey across the universe.'
m23.runtime='1h 39m'
m23.rating='G'
m23.year=2008
m23.brand_id=b2.id
m23.save! 

m24=Movie.new
m24.title='Finding Nemo'
m24.description='When young clownfish Nemo is unexpectedly captured from Australia’s Great Barrier Reef and taken to a dentist’s office aquarium, it’s up to Marlin, his worrisome father, and Dory, a friendly but forgetful regal blue tang fish, to make the epic journey to bring him home.'
m24.runtime='1h 43m'
m24.rating='G'
m24.year=2003
m24.brand_id=b2.id
m24.save! 

m25=Movie.new
m25.title='Ratatouille'
m25.description='In one of Paris’ finest restaurants, Remy, a determined young rat, dreams of becoming a renowned French chef, setting off a hilarious chain of events.'
m25.runtime='1h 51m'
m25.rating='G'
m25.year=2007
m25.brand_id=b2.id
m25.save! 

m26=Movie.new
m26.title='Inside Out'
m26.description='When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.'
m26.runtime='1h 35m'
m26.rating='PG'
m26.year=2015
m26.brand_id=b2.id
m26.save! 

m27=Movie.new
m27.title='Coco'
m27.description='In Disney•Pixar’s extraordinary adventure, a boy who dreams of becoming a great musician embarks on a journey to uncover the mysteries behind his ancestors’ stories and traditions.'
m27.runtime='1h 44m'
m27.rating='PG'
m27.year=2017
m27.brand_id=b2.id
m27.save!

m28=Movie.new
m28.title='Captain America: Civil War'
m28.description='Pressure mounts to hold the Avengers accountable for the destruction left in their wake after battling Ultron. When Captain America and Iron Man find themselves with opposing views, the Avengers take sides, leading to the ultimate battle between Earths mightiest heroes.'
m28.runtime='2h 30m'
m28.rating='PG-13'
m28.year=2016
m28.brand_id=b3.id
m28.save!

m29=Movie.new
m29.title='WandaVision'
m29.description='Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.'
m29.runtime='1 Season'
m29.rating='TV-14'
m29.year=2021
m29.brand_id=b3.id
m29.save!


m30=Movie.new
m30.title='Guardians of the Galaxy'
m30.description='Brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by a powerful villain with ambitions that threaten the entire universe. To evade capture, Quill joins with a quartet of disparate misfits: Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and revenge-driven Drax the Destroyer.'
m30.runtime='2h 2m'
m30.rating='PG-13'
m30.year=2014
m30.brand_id=b3.id
m30.save!

m31=Movie.new
m31.title='Thor: Ragnarok'
m31.description='Thor must race against time to stop the seemingly imminent Ragnarok, a cataclysmic event that could end all of Asgardian civilization. Imprisoned on the other side of the universe and without his mighty hammer, Thor must overcome the odds to ensure that Asgard does not fall into the hands of the ruthless Hela. But first, he must face off against a fellow Avenger in a gladiatorial contest.'
m31.runtime='2h 12m'
m31.rating='PG-13'
m31.year=2017
m31.brand_id=b3.id
m31.save!

m32=Movie.new
m32.title='Doctor Strange'
m32.description='In Marvel Studios’ Doctor Strange, a world-famous neurosurgeon loses the use of his hands in a horrific car accident. Seeking a cure, he finds powerful magic in a mysterious place known as Kamar-Taj, the front line of a battle against unseen dark forces bent on destroying our reality.'
m32.runtime='1h 56m'
m32.rating='PG-13'
m32.year=2016
m32.brand_id=b3.id
m32.save!

m33=Movie.new
m33.title='Iron Man 2'
m33.description='Tony Stark has declared himself Iron Man and installed world peace...or so he thinks. He soon realizes that not only is there a madman out to destroy him, but the very technology designed to save his life is slowly killing him.'
m33.runtime='2h 5m'
m33.rating='PG-13'
m33.year=2010
m33.brand_id=b3.id
m33.save!

m34=Movie.new
m34.title='Star Wars: A New Hope'
m34.description='Young farm boy Luke Skywalker is thrust into a galaxy of adventure when he intercepts a distress call from the captive Princess Leia. The event launches him on a daring mission to rescue her from the clutches of Darth Vader and the evil Empire.'
m34.runtime='2h 4m'
m34.rating='PG'
m34.year=1977
m34.brand_id=b4.id
m34.save!

m35=Movie.new
m35.title='Star Wars: Attack of the Clones'
m35.description='When Jedi apprentice Anakin Skywalker is assigned to protect Senator Padmé Amidala, he discovers his love for her…and his own darker side. Obi-Wan Kenobi uncovers a secret clone army as the galaxy marches toward full-scale war.'
m35.runtime='2h 22m'
m35.rating='PG'
m35.year=2002
m35.brand_id=b4.id
m35.save!

m36=Movie.new
m36.title='Star Wars: Return of the Jedi'
m36.description='When the Empire prepares to crush the Rebellion with a more powerful Death Star, the Rebel fleet counters with a massive attack on the space station. In a final climactic duel, Luke Skywalker confronts Darth Vader.'
m36.runtime='2h 14m'
m36.rating='PG'
m36.year=1983
m36.brand_id=b4.id
m36.save!

m37=Movie.new
m37.title='Star Wars: The Phantom Menace'
m37.description='Jedi Knights Obi-Wan Kenobi and Qui-Gon Jinn rescue Queen Amidala, ruler of a peaceful planet invaded by dark forces. During their escape, they discover nine-year-old Anakin Skywalker, a child prodigy who is unusually strong in the Force.'
m37.runtime='2h 16m'
m37.rating='PG'
m37.year=1999
m37.brand_id=b4.id
m37.save!

m38=Movie.new
m38.title='The World According to Jeff Goldblum'
m38.description='In each episode, Jeff Goldblum pulls on the thread of a deceptively familiar topic to unravel a world of astonishing connections and fascinating secrets, science and history. Through the prism of his curious and witty mind, nothing is as it seems. These "modern marvels" are so commonplace, we often take them for granted…but Jeff Goldblum does not.'
m38.runtime='2 Seasons'
m38.rating='PG'
m38.year=2021
m38.brand_id=b5.id
m38.save!

m39=Movie.new
m39.title='Magic of Disney’s Animal Kingdom'
m39.description='Kenya, a Masai giraffe, steps up for a pedicure. Mac, an African elephant and the Park’s biggest resident, has a routine checkup that reveals a mouthful of mystery. It’s make or break for a much smaller resident, Popcorn, a rescued chicken with an egg problem who requires surgery. Walt Disney Imagineers dream up a magical palm tree that illuminates the elephants during the Park’s evening safari.'
m39.runtime='1 Season'
m39.rating='TV-PG'
m39.year=2020
m39.brand_id=b5.id
m39.save!

m40=Movie.new
m40.title='Growing Up Animal'
m40.description='Heart-warming stories following the development of baby animals on the magical journey from the mysteries of the womb to the challenges of the wild.'
m40.runtime='1 Season'
m40.rating='TV-PG'
m40.year=2021
m40.brand_id=b5.id
m40.save!

m41=Movie.new
m41.title='Most Wanted Sharks'
m41.description='In Most Wanted Sharks, marine biologist and shark-suit inventor Jeremiah Sullivan dives into the stories of the most sensational shark all-stars.'
m41.runtime='44m'
m41.rating='TV-PG'
m41.year=2020
m41.brand_id=b5.id
m41.save!


puts "Movies finished!"

# brand buttons
# file1 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Brand+Button+Videos/disneyButton.mp4')
# b1.button_video.attach(io: file1, filename: 'disneyButton.mp4')

puts "Attaching photos..."


#movie_photos 
# mPhoto1 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m1.jpg') 
# mPhoto2 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m2.jpg') 
# mPhoto3 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m3.jpg') 
# mPhoto4 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m4.jpg') 
# mPhoto5 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m5.jpg') 
# mPhoto6 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m6.jpg') 
# mPhoto7 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m7.jpg') 
# mPhoto8 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m8.jpg') 
# mPhoto9 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m9.jpg') 
# mPhoto10 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m10.jpg') 
# mPhoto11 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m11.jpg') 
# mPhoto12 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m12.jpg') 
# mPhoto13 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m13.jpg') 
# mPhoto14 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m14.jpg') 
# mPhoto15 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m15.jpg') 
# 
# mPhoto16 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m16.jpg') 
# mPhoto17 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m17.jpg') 
# mPhoto18 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m18.jpg') 
# mPhoto19 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m19.jpg') 
# mPhoto20 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m20.jpg') 
# mPhoto21 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m21.jpg') 
# mPhoto22 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m22.jpg') 
# mPhoto23 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m23.jpg') 
# mPhoto24 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m24.jpg') 
# mPhoto25 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m25.jpg') 
# mPhoto26 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m26.jpg') 
# mPhoto27 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m27.jpg') 
# mPhoto28 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m28.jpg') 
# mPhoto29 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m29.jpg') 
# mPhoto30 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m30.jpg')
# mPhoto31 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m31.jpg') 
# mPhoto32 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m32.jpg') 
# mPhoto33 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m33.jpg') 
# mPhoto34 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m34.jpg') 
# mPhoto35 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m35.jpg') 
# mPhoto36 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m36.jpg') 
# mPhoto37 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m37.jpg') 
# mPhoto38 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m38.jpg') 
# mPhoto39 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m39.jpg') 
# mPhoto40 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m40.png')  
# mPhoto41 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Posters/m41.jpg')  


# m1.image.attach(io: mPhoto1, filename: 'm1.jpg')
# m2.image.attach(io: mPhoto2, filename: 'm2.jpg')
# m3.image.attach(io: mPhoto3, filename: 'm3.jpg')
# m4.image.attach(io: mPhoto4, filename: 'm4.jpg')
# m5.image.attach(io: mPhoto5, filename: 'm5.jpg')
# m6.image.attach(io: mPhoto6, filename: 'm6.jpg')
# m7.image.attach(io: mPhoto7, filename: 'm7.jpg')
# m8.image.attach(io: mPhoto8, filename: 'm8.jpg')
# m9.image.attach(io: mPhoto9, filename: 'm9.jpg')
# m10.image.attach(io: mPhoto10, filename: 'm10.jpg')
# m11.image.attach(io: mPhoto11, filename: 'm11.jpg')
# m12.image.attach(io: mPhoto12, filename: 'm12.jpg')
# m13.image.attach(io: mPhoto13, filename: 'm13.jpg')
# m14.image.attach(io: mPhoto14, filename: 'm14.jpg')
# m15.image.attach(io: mPhoto15, filename: 'm15.jpg')
# 
# m16.image.attach(io: mPhoto16, filename: 'm16.jpg')
# m17.image.attach(io: mPhoto17, filename: 'm17.jpg')
# m18.image.attach(io: mPhoto18, filename: 'm18.jpg')
# m19.image.attach(io: mPhoto19, filename: 'm19.jpg')
# m20.image.attach(io: mPhoto20, filename: 'm20.jpg')
# m21.image.attach(io: mPhoto21, filename: 'm21.jpg')
# m22.image.attach(io: mPhoto22, filename: 'm22.jpg')
# m23.image.attach(io: mPhoto23, filename: 'm23.jpg')
# m24.image.attach(io: mPhoto24, filename: 'm14.jpg')
# m25.image.attach(io: mPhoto25, filename: 'm25.jpg')
# m26.image.attach(io: mPhoto26, filename: 'm26.jpg')
# m27.image.attach(io: mPhoto27, filename: 'm27.jpg')
# m28.image.attach(io: mPhoto28, filename: 'm28.jpg')
# m29.image.attach(io: mPhoto29, filename: 'm29.jpg')
# m30.image.attach(io: mPhoto30, filename: 'm30.jpg')
# m31.image.attach(io: mPhoto31, filename: 'm31.jpg')
# m32.image.attach(io: mPhoto32, filename: 'm32.jpg')
# m33.image.attach(io: mPhoto33, filename: 'm33.jpg')
# m34.image.attach(io: mPhoto34, filename: 'm34.jpg')
# m35.image.attach(io: mPhoto35, filename: 'm35.jpg')
# m36.image.attach(io: mPhoto36, filename: 'm36.jpg')
# m37.image.attach(io: mPhoto37, filename: 'm37.jpg')
# m38.image.attach(io: mPhoto38, filename: 'm38.jpg')
# m39.image.attach(io: mPhoto39, filename: 'm39.jpg')
# m40.image.attach(io: mPhoto40, filename: 'm40.png')
# m41.image.attach(io: mPhoto41, filename: 'm41.jpg')

puts "Photos attached!"

puts "Attaching movies. This could take a while..."

# puts "Opening movie 1..."
# mMovie1 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m1.mp4')
# puts "Movie 1 opened!"
# 
# puts "Opening movie 2..."
# mMovie2 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m2.mp4')
# puts "Movie 2 opened!"
# 
# puts "Opening movie 3..."
# mMovie3 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m3.mp4')
# puts "Movie 3 opened!"
# 
# puts "Opening movie 4..."
# mMovie4 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m4.mp4')
# puts "Movie 4 opened!"
# 
# puts "Opening movie 5..."
# mMovie5 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m5.mp4')
# puts "Movie 5 opened!"
# 
# puts "Opening movie 6..."
# mMovie6 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m6.mp4')
# puts "Movie 6 opened!"
# 
# puts "Opening movie 7..."
# mMovie7 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m7.mp4')
# puts "Movie 7 opened!"
# 
# puts "Opening movie 8..."
# mMovie8 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m8.mp4')
# puts "Movie 8 opened!"
# 
# puts "Opening movie 9..."
# mMovie9 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m9.mp4')
# puts "Movie 9 opened!"
# 
# puts "Opening movie 10..."
# mMovie10 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m10.mp4')
# puts "Movie 10 opened!"
# 
# puts "Opening movie 11..."
# mMovie11 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m11.mp4')
# puts "Movie 11 opened!"
# 
# puts "Opening movie 12..."
# mMovie12 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m12.mp4')
# puts "Movie 12 opened!"
# 
# puts "Opening movie 13..."
# mMovie13 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m13.mp4')
# puts "Movie 13 opened!"
# 
# puts "Opening movie 14..."
# mMovie14 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m14.mp4')
# puts "Movie 14 opened!"
# 
# puts "Opening movie 15..."
# mMovie15 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m15.mp4')
# puts "Movie 15 opened!"
# 
# puts "Opening movie 16..."
# mMovie16 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m16.mp4')
# puts "Movie 16 opened!"
# 
# puts "Opening movie 17..."
# mMovie17 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m17.mp4')
# puts "Movie 17 opened!"
# 
# puts "Opening movie 18..."
# mMovie18 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m18.mp4')
# puts "Movie 18 opened!"
# 
# puts "Opening movie 19..."
# mMovie19 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m19.mp4')
# puts "Movie 19 opened!"
# 
# puts "Opening movie 20..."
# mMovie20 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m20.mp4')
# puts "Movie 20 opened!"
# 
# puts "Opening movie 21..."
# mMovie21 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m21.mp4')
# puts "Movie 21 opened!"
# 
# puts "Opening movie 22..."
# mMovie22 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m22.mp4')
# puts "Movie 22 opened!"
# 
# puts "Opening movie 23..."
# mMovie23 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m23.mp4')
# puts "Movie 23 opened!"
# 
# puts "Opening movie 24..."
# mMovie24 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m24.mp4')
# puts "Movie 24 opened!"
# 
# puts "Opening movie 25..."
# mMovie25 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m25.mp4')
# puts "Movie 25 opened!"
# 
# puts "Opening movie 26..."
# mMovie26 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m26.mp4')
# puts "Movie 26 opened!"
# 
# puts "Opening movie 27..."
# mMovie27 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m27.mp4')
# puts "Movie 27 opened!"
# 
# puts "Opening movie 28..."
# mMovie28 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m28.mp4')
# puts "Movie 28 opened!"
# 
# puts "Opening movie 29..."
# mMovie29 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m29.mp4')
# puts "Movie 29 opened!"
# 
# puts "Opening movie 30..."
# mMovie30 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m30.mp4')
# puts "Movie 30 opened!"
# 
# puts "Opening movie 31..."
# mMovie31 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m31.mp4')
# puts "Movie 31 opened!"
# 
# puts "Opening movie 32..."
# mMovie32 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m32.mp4')
# puts "Movie 32 opened!"
# 
# puts "Opening movie 33..."
# mMovie33 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m33.mp4')
# puts "Movie 33 opened!"
# 
# puts "Opening movie 34..."
# mMovie34 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m34.mp4')
# puts "Movie 34 opened!"
# 
# puts "Opening movie 35..."
# mMovie35 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m35.mp4')
# puts "Movie 35 opened!"
# 
# puts "Opening movie 36..."
# mMovie36 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m36.mp4')
# puts "Movie 36 opened!"
# 
# puts "Opening movie 37..."
# mMovie37 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m37.mp4')
# puts "Movie 37 opened!"
# 
# puts "Opening movie 38..."
# mMovie38 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m38.mp4')
# puts "Movie 38 opened!"
# 
# puts "Opening movie 39..."
# mMovie39 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m39.mp4')
# puts "Movie 39 opened!"
# 
# puts "Opening movie 40..."
# mMovie40 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m40.mp4')
# puts "Movie 40 opened!"
# 
# puts "Opening movie 41..."
# mMovie41 = URI.open('https://disneycinema.s3.us-east-2.amazonaws.com/Movie+Clips/m41.mp4')
# puts "Movie 41 opened!"




puts "Attaching Movie 1..."


#m1.movie.attach(io: mMovie1, filename: 'm1.mp4')
# 
# puts "Movie 1 Finished!"
# puts "Attaching Movie 2..."
# 
# m2.movie.attach(io: mMovie2, filename: 'm2.mp4')
# 
# puts "Movie 2 Finished!"
# puts "Attaching Movie 3..."
# 
# m3.movie.attach(io: mMovie3, filename: 'm3.mp4')
# 
# puts "Movie 3 Finished!"
# puts "Attaching Movie 4..."
# 
# m4.movie.attach(io: mMovie4, filename: 'm4.mp4')
# 
# puts "Movie 4 Finished!"
# puts "Attaching Movie 5..."
# 
# m5.movie.attach(io: mMovie5, filename: 'm5.mp4')
# 
# puts "Movie 5 Finished!"
# puts "Attaching Movie 6..."
# 
# m6.movie.attach(io: mMovie6, filename: 'm6.mp4')
# 
# puts "Movie 6 Finished!"
# puts "Attaching Movie 7..."
# 
# m7.movie.attach(io: mMovie7, filename: 'm7.mp4')
# 
# puts "Movie 7 Finished!"
# puts "Attaching Movie 8..."
# 
# m8.movie.attach(io: mMovie8, filename: 'm8.mp4')
# 
# puts "Movie 8 Finished!"
# puts "Attaching Movie 9..."
# 
# m9.movie.attach(io: mMovie9, filename: 'm9.mp4')
# 
# puts "Movie 9 Finished!"
# puts "Attaching Movie 10..."
# 
# m10.movie.attach(io: mMovie10, filename: 'm10.mp4')
# 
# puts "Movie 10 Finished!"
# puts "Attaching Movie 11..."
# 
# m11.movie.attach(io: mMovie11, filename: 'm11.mp4')
# 
# puts "Movie 11 Finished!"
# puts "Attaching Movie 12..."
# 
# m12.movie.attach(io: mMovie12, filename: 'm12.mp4')
# 
# 
# puts "Movie 12 Finished!"
# puts "Attaching Movie 13..."
# 
# m13.movie.attach(io: mMovie13, filename: 'm13.mp4')
# 
# puts "Movie 13 Finished!"
# puts "Attaching Movie 14..."
# 
# m14.movie.attach(io: mMovie14, filename: 'm14.mp4')
# 
# puts "Movie 14 Finished!"
# puts "Attaching Movie 15..."
# 
# m15.movie.attach(io: mMovie15, filename: 'm15.mp4')
# 
# puts "Movie 15 Finished!"
# puts "Attaching Movie 16..."
# 
# m16.movie.attach(io: mMovie16, filename: 'm16.mp4')
# 
# puts "Movie 16 Finished!"
# puts "Attaching Movie 17..."
# 
# m17.movie.attach(io: mMovie17, filename: 'm17.mp4')
# 
# puts "Movie 17 Finished!"
# puts "Attaching Movie 18..."
# 
# m18.movie.attach(io: mMovie18, filename: 'm18.mp4')
# 
# puts "Movie 18 Finished!"
# puts "Attaching Movie 19..."
# 
# m19.movie.attach(io: mMovie19, filename: 'm19.mp4')
# 
# puts "Movie 19 Finished!"
# puts "Attaching Movie 20..."
# 
# m20.movie.attach(io: mMovie20, filename: 'm20.mp4')
# 
# puts "Movie 20 Finished!"
# puts "Attaching Movie 21..."
# 
# m21.movie.attach(io: mMovie21, filename: 'm21.mp4')
# 
# puts "Movie 21 Finished!"
# puts "Attaching Movie 22..."
# 
# m22.movie.attach(io: mMovie22, filename: 'm22.mp4')
# 
# puts "Movie 22 Finished!"
# puts "Attaching Movie 23..."
# 
# m23.movie.attach(io: mMovie23, filename: 'm23.mp4')
# 
# 
# puts "Movie 23 Finished!"
# puts "Attaching Movie 24..."
# 
# m24.movie.attach(io: mMovie24, filename: 'm24.mp4')
# 
# puts "Movie 24 Finished!"
# puts "Attaching Movie 25..."
# 
# m25.movie.attach(io: mMovie25, filename: 'm25.mp4')
# 
# puts "Movie 25 Finished!"
# puts "Attaching Movie 26..."
# 
# m26.movie.attach(io: mMovie26, filename: 'm26.mp4')
# 
# puts "Movie 26 Finished!"
# puts "Attaching Movie 27..."
# 
# m27.movie.attach(io: mMovie27, filename: 'm27.mp4')
# 
# puts "Movie 27 Finished!"
# puts "Attaching Movie 28..."
# 
# m28.movie.attach(io: mMovie28, filename: 'm28.mp4')
# 
# puts "Movie 28 Finished!"
# puts "Attaching Movie 29..."
# 
# m29.movie.attach(io: mMovie29, filename: 'm29.mp4')
# 
# puts "Movie 29 Finished!"
# puts "Attaching Movie 30..."
# 
# m30.movie.attach(io: mMovie30, filename: 'm30.mp4')
# 
# puts "Movie 30 Finished!"
# puts "Attaching Movie 31..."
# 
# m31.movie.attach(io: mMovie31, filename: 'm31.mp4')
# 
# puts "Movie 31 Finished!"
# puts "Attaching Movie 32..."
# 
# m32.movie.attach(io: mMovie32, filename: 'm32.mp4')
# 
# puts "Movie 32 Finished!"
# puts "Attaching Movie 33..."
# 
# m33.movie.attach(io: mMovie33, filename: 'm33.mp4')
# 
# puts "Movie 33 Finished!"
# puts "Attaching Movie 34..."
# 
# m34.movie.attach(io: mMovie34, filename: 'm34.mp4')
# 
# puts "Movie 34 Finished!"
# puts "Attaching Movie 35..."
# 
# m35.movie.attach(io: mMovie35, filename: 'm35.mp4')
# 
# puts "Movie 35 Finished!"
# puts "Attaching Movie 36..."
# 
# m36.movie.attach(io: mMovie36, filename: 'm36.mp4')
# 
# puts "Movie 36 Finished!"
# puts "Attaching Movie 37..."
# 
# m37.movie.attach(io: mMovie37, filename: 'm37.mp4')
# 
# puts "Movie 37 Finished!"
# puts "Attaching Movie 38..."
# 
# m38.movie.attach(io: mMovie38, filename: 'm38.mp4')
# 
# puts "Movie 38 Finished!"
# puts "Attaching Movie 39..."
# 
# m39.movie.attach(io: mMovie39, filename: 'm39.mp4')
# 
# puts "Movie 39 Finished!"
# puts "Attaching Movie 40..."
# 
# m40.movie.attach(io: mMovie40, filename: 'm40.mp4')
# 
# puts "Movie 40 Finished!"
# puts "Attaching Movie 41..."
# 
# m41.movie.attach(io: mMovie41, filename: 'm41.mp4')
# 
puts "Movie 41 Finished!"




puts "Movies attached!"
puts "ALL DONE!"