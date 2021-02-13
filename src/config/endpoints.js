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
    save: '/api/habits/categories',
  },
  followups: {
    mark: '/api/habits/follow-up/{habit}',
    weeklyFollowUps: '/api/habits/daily-follow-up/from/{from}/to/{to}',
  },
  test: {
    checkApi: '/api/test/check',
    checkApiParams: '/api/test/check/{id}',
  },
  tasks: {
    list: '/api/tasks',
    save: '/api/tasks',
    change: '/api/tasks/change/{task}',
    groups: {
      list: '/api/tasks/groups',
      save: '/api/tasks/groups',
      update: '/api/tasks/groups/{group}',
      remove: '/api/tasks/groups/{group}',
    },
  },
};
