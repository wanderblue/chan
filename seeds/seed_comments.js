exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          board: 'movies',
          topic: 'Gone with the Wind',
          userName: 'Blue',
          type: 1,
          media: 'https://www.filminquiry.com/wp-content/uploads/2019/03/gonewiththewindcover-750x500.jpg',
          text: 'Epic Civil War drama focuses on the life of petulant southern belle Scarlett (Vivien Leigh).'
        },
        {
          id: 2,
          board: 'dogs',
          topic: 'My aussie shepherd',
          userName: 'Blue',
          type: 1,
          media: 'http://www.dogzone.com/images/breeds/australian-shepherd.jpg',
          text: 'I love my aussie shepherd.'
        },
        {
          id: 3,
          board: 'fitness',
          topic: 'yoga',
          userName: 'Blue',
          type: 1,
          media: 'https://cdn1.medicalnewstoday.com/content/images/articles/318/318774/a-woman-practicing-yoga-on-the-beach.jpg',
          text: 'Yoga can help to treat depression'
        },
        {
          id: 4,
          board: 'Dogs',
          topic: 'My German Shepherd',
          userName: 'Sasan',
          type: 1,
          media: 'https://petcentral.chewy.com/wp-content/uploads/2018/05/german-shepherd-620-403-shutterstock-101225047.jpg',
          text: 'I love my German Shepherd'
        },
        {
          id: 5,
          board: 'Food',
          topic: 'Chicago Pizza With A Twist',
          userName: 'Eric',
          type: 1,
          media: 'http://elainespizza.com/facebookimages/Pizza3.jpg',
          text: 'Your neighborhood friendly spot located in downtown'
        },
        {
          id: 6,
          board: 'Travel',
          topic: 'Ireland',
          userName: 'Eric',
          type: 1,
          media: 'https://cdn.tourradar.com/s3/tour/original/101761_91f4da0e.jpg',
          text: 'The Celtic Voyage - All Inclusive '
        },
        {
          id: 7,
          board: 'Sports',
          topic: 'The Eagle football team',
          userName: 'Sasan',
          type: 1,
          media: 'https://bloximages.chicago2.vip.townnews.com/idahopress.com/content/tncms/assets/v3/editorial/8/6d/86d0a9fe-28a7-590c-9a93-2ee29e74b6c7/5bdbb2ba4161b.image.jpg',
          text: 'Eagle looks to continue dark horse run'
        },
        {
          id: 8,
          board: 'Cats',
          topic: 'What is a cat',
          userName: 'Eric',
          type: 1,
          media: 'https://cdn.pixilart.com/photos/large/8c76c29df4bde47.png',
          text: 'The cat is either a house cat, kept as a pet, or a feral cat, freely ranging and avoiding human contact.'
        },
        {
          id: 9,
          board: 'Soda',
          topic: 'discover the best soda in America',
          userName: 'Ernie',
          type: 1,
          media: 'https://www.fodors.com/wp-content/uploads/2019/03/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg',
          text: 'There are so many sodas out there, it might be hard to determine which one is the best.'
        },
        {
          id: 10,
          board: 'Travel',
          topic: 'Iceland',
          userName: 'Blue',
          type: 1,
          media: 'https://www.telegraph.co.uk/content/dam/Travel/2019/March/Kirkjufell-iStock-959966730.jpg?imwidth=1400',
          text: 'Another planet on Erarth'
        },
        {
          id: 11,
          board: 'Finance',
          topic: 'Why Home Depot failed in China',
          userName: 'Eric',
          type: 1,
          media: 'https://n6s6b6w9.stackpathcdn.com/client/w_719,q_lossy,ret_wait/https://appgrooves.com/cdn/mc/NEWS_AND_MAGAZINES/20_w1200.jpg',
          text: 'It seemed like a great opportunity.'
        },
        {
          id: 12,
          board: 'Sauce',
          topic: 'what is the best bbq sauce?',
          userName: 'Ernie',
          type: 1,
          media: 'https://files.slack.com/files-pri/TG572AVJT-FK8EXGPSN/1371597847826.jpeg',
          text: 'Trader Joe Kansas City BBQ Sauce. Sweet Baby Ray Original. ...'
        },
        {
          id: 13,
          board: 'Movies',
          topic: 'Jane Eyre',
          userName: 'Blue',
          type: 1,
          media: 'https://cdn1.i-scmp.com/sites/default/files/styles/1920x1080/public/images/methode/2018/05/21/20e2f15a-5981-11e8-a7d9-186ba932a081_image_hires_115232.jpg',
          text: 'Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong.'
        },
        {
          id: 14,
          board: 'Travel',
          topic: 'Luxury Peru Tours with Scenic',
          userName: 'Ernie',
          type: 1,
          media: 'https://www.scenic.com.au/-/media/scenic/australia/content-pages/travel/south-america/peru/peru-tours.jpg',
          text: 'Peru has a special charisma that is impossible to resist and our luxurious Peru tours will immerse you in its many wonders.'
        }

      ])
    })
}
