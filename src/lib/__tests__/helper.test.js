import formatAthlete from '../helper';

const defaultAthlete = {
  Participant: {
    n_PersonID: null,
    n_TeamID: 33712,
    c_Participant: 'Netherlands',
    c_ParticipantShort: 'NED',
  },
  n_EventPhaseID: 815534,
  Event: {
    n_ID: 11148,
    c_Name: 'Team Pursuit 6 Laps',
    c_Short: 'Team Pursuit',
  },
  Gender: {
    n_ID: 2,
    c_Name: 'Women',
    c_Short: 'W',
  },
  TeamMembers: [],
  medal: 'red',
};

it('formats basic example', () => {
  const result = formatAthlete.formatAthlete(defaultAthlete);
  expect(result).toEqual({ event: 'Team Pursuit 6 Laps, Women', medal: 'red', name: 'Netherlands' });
});

it('not crashes when passed empty data', () => {
  const result = formatAthlete.formatAthlete();
  expect(result).toEqual({ event: 'undefined, undefined', medal: undefined, name: undefined });
});
