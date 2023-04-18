import client from './client.js';
import { v4 as uuidv4 } from 'uuid';
import encrypt from './encrypt.js';
import process from 'process';

const cities = ['Kyiv', 'Kharkiv', 'Ivano-Frankivsk', 'Donetsk'];

const users = [
  {
    login: 'Admin1',
    password: await encrypt('1234'),
    email: 'admin1@gmail.com',
    phone_number: '+380409318431',
    role: 'admin',
  },
  {
    login: 'moderator',
    password: await encrypt('1234'),
    email: 'moder@gmail.com',
    phone_number: '+380409318432',
    role: 'moderator',
  },
  {
    login: 'organization',
    password: await encrypt('1234'),
    email: 'organization@gmail.com',
    phone_number: '+380409318433',
    role: 'organization',
    first_name: "Степан",
    second_name: "Бандера",
    last_name: "Андреевич",
  },
  {
    login: 'Andrew',
    password: await encrypt('1234'),
    email: 'user1@gmail.com',
    role: 'user',
    phone_number: '+380409318434',
    content: "I think it's excellent!",
  },
  {
    login: 'Olega',
    password: await encrypt('1234'),
    email: 'user3@gmail.com',
    role: 'user',
    phone_number: '+380409318435',
    content: 'I am a macaque :)',
  },
  {
    login: 'I_love_uk',
    password: await encrypt('1234'),
    email: 'user4@gmail.com',
    role: 'user',
    phone_number: '+380409318436',
    content: 'I peed yesterday XD',
  },
  {
    login: 'Vasil',
    password: await encrypt('1234'),
    email: 'user4@gmail.com',
    role: 'user',
    phone_number: '+380409318437',
    content: 'If you read this text, the pipe will fall off)))))',
  },
  {
    login: 'Dady',
    password: await encrypt('1234'),
    email: 'user5@gmail.com',
    role: 'user',
    phone_number: '+380409318438',
    content: 'Niggas will always be slaves :O',
  },
];
const events= [
  {
    title: 'WHAT MEN ARE SILENT ABOUT',
    description: 'abobus abobus',
    city: cities[0],
    address: 'Vorovskaya 12',
    event_start: Date.parse('2023-01-22T18:00'),
    event_end: Date.parse('2023-01-23T18:00'),
    poster: 'pro.png',
  },
  {
    title: 'UNDERGROUND STANDUP FOR THREE',
    description: 'abobus abobus',
    city: cities[1],
    address: 'Vorovskaya 12',
    event_start: Date.parse('2023-03-12T18:00'),
    event_end: Date.parse('2023-03-14T18:00'),
    poster: '3.png',
  },
  {
    title: 'YURIY THE VELIKY "Soulfully AT HOME"',
    description: 'abobus abobus',
    city: cities[3],
    address: 'Vorovskaya 12',
    event_start: Date.parse('2023-03-01T18:00'),
    event_end: Date.parse('2023-03-03T18:00'),
    poster: '4.png',
  },
  {
    title: 'STANDUP EVENING',
    description: 'abobus abobus',
    city: cities[0],
    address: 'Vorovskaya 12',
    event_start: Date.parse('2023-09-10T10:00'),
    event_end: Date.parse('2023-09-11T18:00'),
    poster: '5.jpg',
  },
  {
    title: 'STANDUP FOR THREE',
    description: 'abobus abobus',
    city: cities[1],
    address: 'Vorovskaya 12',
    event_start: Date.parse('2023-09-30T09:00'),
    event_end: Date.parse('2023-10-01T19:00'),
    poster: '6.jpg',
  },
  {
    title: 'SPRING CONCERT',
    description: 'abobus abobus',
    city: cities[2],
    address: 'Vorovskaya 12',
    event_start: Date.parse('2023-12-15T13:00'),
    event_end: Date.parse('2023-12-16T16:00'),
    poster: '7.jpg',
  },
  {
    title: '10 STANDUP COMIKES',
    description: 'abobus abobus',
    city: cities[3],
    address: 'Vorovskaya 12',
    event_start: Date.parse('2023-12-31T10:00'),
    event_end: Date.parse('2024-01-01T14:00'),
    poster: '8.jpg',
  },


  
]
const categories = [
  {
    title: 'Standup',
    description: 'create amogus 1',
  },
  {
    title: 'Concert',
    description: 'create amogus 2',
  },
  {
    title: 'Rock & Folk',
    description: 'create amogus 3',
  },
  {
    title: 'Comedy',
    description: 'create amogus 4',
  },
  {
    title: 'Ukraine',
    description: 'create amogus 5',
  },
];

const cleanDatabase = async () => {
  try {
    await client('users').del();
    await client('roles').del();
    await client('events').del();
    await client('tickets').del();
    await client('categories').del();
    await client('event_categories').del();
    await client('organization').del();
    await client('comments').del();
    await client('event_comments').del();
    console.log('/--------------------\\');
    console.log('|database clean (^_^)|');
    console.log('|--------------------|');
  } catch (err) {
    throw err;
  }
};

const createOrganizarion = async (user_id) => {
  const id = uuidv4();
  await client('organization').insert({
    id,
    user_id,
    name_organization: 'Trello',
    phone_organization: '+380501234567',
    phone_staff: '+380507654321',
    address: 'Trello 2',
    email: 'trello@gmail.com',
    description:
      'Cloud-based small team project management software developed by Fog Creek Software. Trello uses a project management paradigm known as kanban, a method originally popularized by Toyota in the 1980s for supply chain management.',
    link_organization: 'trello.com​',
    secret_key:
      'sk_test_51Mg9UfDxrUTatUeLOCgBTViSh63SKNU7hixzWgz2VTR4ZXaYyxaHd6ccbJjUqmIVc0m9BDwFhyKjI9KNZSynyK4g00jS8lViec',
    is_confirmed: true,
  });
};

const setRole = async (user_id, role) => {
  const id = uuidv4();
  await client('roles').insert({ id, user_id, role });
};

const createTicket = async (event_id, user_id) => {
  const id = uuidv4();
  await client('tickets').insert({
    id,
    event_id,
    price: 150,
  });
};
const createEventAndComment = async (id, user_id) => {
  await client('events').insert({
    id,
    user_id,
    title: 'OLEG SKRIPKA AND ORCHESTRONI.',
    description: 'abobus abobus',
    city: cities[0],
    address: 'Amogus1',
    event_start: Date.parse('2023-02-20T18:00'),
    event_end: Date.parse('2023-03-21T18:00'),
    poster: '1.png',
  });
  const categories = await client('categories').select('categories.id');
  categories.map(async (category, count) => {
    if (count < 3) {
      await client('event_categories').insert({
        event_id: id,
        category_id: category.id,
      });
    }
  });
  for (let i = 0; i < 10; i += 1) {
    await createTicket(id, user_id);
  }
  return id;
};

const createEvent = async (user_id, count, data) => {
  const id = uuidv4();
  await client('events').insert({
    id,
    user_id,
    ...data
  });
  const category = await client('categories').select('categories.id');
  await client('event_categories').insert({
    event_id: id,
    category_id: category[count>4 ? 1:count].id,
  });
  await client('event_categories').insert({
    event_id: id,
    category_id: category[(count>3 ? 1:count) + 1 ].id,
  });
  for (let i = 0; i < 10; i += 1) {
    await createTicket(id, user_id);
  }
};

const createComment = async (event_id, user_id, content) => {
  const id = uuidv4();
  await client('event_comments').insert({
    event_id,
    comment_id: id,
  });
  await client('comments').insert({
    id,
    user_id,
    content,
  });
};

(async () => {
  try {
    await cleanDatabase();

    const promisesCategories = categories.map(async (data) => {
      const id = uuidv4();
      return client('categories').insert({ ...data, id });
    });
    await Promise.all(promisesCategories);
    const eventId = uuidv4();
    const promisesUsers = users.map(
      async ({ role, content, ...data }, count) => {
        const id = uuidv4();
        await setRole(id, role);
        if (count === 2) {
          await createOrganizarion(id);
          await createEventAndComment(eventId, id);
          const kokon = events.map(async (item, i)  =>  await createEvent(id,i, item))
         await Promise.all(kokon)
       
    
        }
        if (count > 2) {
          await createComment(eventId, id, content);
        }
        return client('users').insert({ ...data, active: true, id });
      }
    );
    await Promise.all(promisesUsers);
    console.log('|     complete :)    |');
    console.log('\\--------------------/');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
})();
