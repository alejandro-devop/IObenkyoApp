export default {
  auth: {
    login: '/api/auth/login',
  },
  habits: {
    list: '/api/habits',
    save: '/api/habits',
    update: '/api/habits',
    remove: '/api/habits',
  },
  habitCategories: {
    list: '/api/habits/categories',
  },
  followups: {
    mark: '/api/habits/follow-up/{habit}'
  },
  test: {
    checkApi: '/api/test/check',
    checkApiParams: '/api/test/check/{id}',
  },
};
