const formatAthlete = (athlete = {}) => ({
  medal: athlete.medal,
  event: `${athlete.Event && athlete.Event.c_Name}, ${athlete.Gender && athlete.Gender.c_Name}`,
  name: athlete.Participant && athlete.Participant.c_Participant,
});

export default { formatAthlete };
