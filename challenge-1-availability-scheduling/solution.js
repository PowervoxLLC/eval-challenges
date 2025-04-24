/**
 * Finds all available time slots where a meeting of the specified duration can be scheduled,
 * considering working hours and existing bookings.
 *
 * @param {number[][]} workingHours - Array of working hours where each element is [startTime, endTime]
 * @param {number[][]} existingBookings - Array of existing bookings where each element is [startTime, endTime]
 * @param {number} meetingDuration - Duration of the meeting in minutes
 * @returns {number[][]} - Array of available time slots where each element is [startTime, endTime]
 * @throws {Error} - If meetingDuration is less than or equal to 0
 * @throws {Error} - If working hours overlap
 */
function findAvailableSlots(workingHours, existingBookings, meetingDuration) {
  if (meetingDuration <= 0) {
    throw new Error("Meeting duration must be greater than 0");
  }

  // TODO: Implement the function
  return [];
}

module.exports = findAvailableSlots;
