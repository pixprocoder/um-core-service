
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AcademicSemesterScalarFieldEnum = {
  id: 'id',
  year: 'year',
  title: 'title',
  code: 'code',
  startMonth: 'startMonth',
  endMonth: 'endMonth',
  isCurrent: 'isCurrent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AcademicFacultyScalarFieldEnum = {
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AcademicDepartmentScalarFieldEnum = {
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  academicFacultyId: 'academicFacultyId'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  firstName: 'firstName',
  lastName: 'lastName',
  middleName: 'middleName',
  profileImage: 'profileImage',
  email: 'email',
  contactNo: 'contactNo',
  gender: 'gender',
  bloodGroup: 'bloodGroup',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  academicSemesterId: 'academicSemesterId',
  academicDepartmentId: 'academicDepartmentId',
  academicFacultyId: 'academicFacultyId'
};

exports.Prisma.FacultyScalarFieldEnum = {
  id: 'id',
  facultyId: 'facultyId',
  firstName: 'firstName',
  lastName: 'lastName',
  middleName: 'middleName',
  profileImage: 'profileImage',
  email: 'email',
  contactNo: 'contactNo',
  gender: 'gender',
  bloodGroup: 'bloodGroup',
  designation: 'designation',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  academicDepartmentId: 'academicDepartmentId',
  academicFacultyId: 'academicFacultyId'
};

exports.Prisma.BuildingScalarFieldEnum = {
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomScalarFieldEnum = {
  id: 'id',
  roomNumber: 'roomNumber',
  floor: 'floor',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  buildingId: 'buildingId'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  title: 'title',
  code: 'code',
  credits: 'credits',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourseToPrerequisiteScalarFieldEnum = {
  courseId: 'courseId',
  preRequisiteId: 'preRequisiteId'
};

exports.Prisma.CourseFacultyScalarFieldEnum = {
  courseId: 'courseId',
  facultyId: 'facultyId'
};

exports.Prisma.SemesterRegistrationScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  minCredit: 'minCredit',
  maxCredit: 'maxCredit',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  academicSemesterId: 'academicSemesterId'
};

exports.Prisma.OfferedCourseScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  courseId: 'courseId',
  academicDepartmentId: 'academicDepartmentId',
  semesterRegistrationId: 'semesterRegistrationId'
};

exports.Prisma.OfferedCourseSectionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  maxCapacity: 'maxCapacity',
  currentlyEnrolledStudent: 'currentlyEnrolledStudent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  offeredCourseId: 'offeredCourseId',
  semesterRegistrationId: 'semesterRegistrationId'
};

exports.Prisma.OfferedCourseClassScheduleScalarFieldEnum = {
  id: 'id',
  startTime: 'startTime',
  endTime: 'endTime',
  dayOfWeek: 'dayOfWeek',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  offeredCourseSectionId: 'offeredCourseSectionId',
  semesterRegistrationId: 'semesterRegistrationId',
  roomId: 'roomId',
  facultyId: 'facultyId'
};

exports.Prisma.StudentSemesterRegistrationScalarFieldEnum = {
  id: 'id',
  isConfirmed: 'isConfirmed',
  totalCreditsTaken: 'totalCreditsTaken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  semesterRegistrationId: 'semesterRegistrationId'
};

exports.Prisma.StudentSemesterRegistrationCourseScalarFieldEnum = {
  semesterRegistrationId: 'semesterRegistrationId',
  studentId: 'studentId',
  offeredCourseId: 'offeredCourseId',
  offeredCourseSectionId: 'offeredCourseSectionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudentEnrolledCourseScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  courseId: 'courseId',
  academicSemesterId: 'academicSemesterId',
  grade: 'grade',
  point: 'point',
  totalMarks: 'totalMarks',
  status: 'status'
};

exports.Prisma.StudentEnrolledCourseMarkScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  studentEnrolledCourseId: 'studentEnrolledCourseId',
  academicSemesterId: 'academicSemesterId',
  grade: 'grade',
  marks: 'marks',
  examType: 'examType'
};

exports.Prisma.StudentSemesterPaymentScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  academicSemesterId: 'academicSemesterId',
  fullPaymentAmount: 'fullPaymentAmount',
  partialPaymentAmount: 'partialPaymentAmount',
  totalDueAmount: 'totalDueAmount',
  totalPaidAmount: 'totalPaidAmount',
  paymentStatus: 'paymentStatus'
};

exports.Prisma.StudentSemesterPaymentHistoryScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentSemesterPaymentId: 'studentSemesterPaymentId',
  transactionId: 'transactionId',
  dueAmount: 'dueAmount',
  paidAmount: 'paidAmount',
  paymentMethod: 'paymentMethod',
  isPaid: 'isPaid'
};

exports.Prisma.StudentAcademicInfoScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  totalCompletedCredit: 'totalCompletedCredit',
  cgpa: 'cgpa'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.SemesterRegistrationStatus = exports.$Enums.SemesterRegistrationStatus = {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  ENDED: 'ENDED'
};

exports.WeekDays = exports.$Enums.WeekDays = {
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY'
};

exports.StudentEnrolledCourseStatus = exports.$Enums.StudentEnrolledCourseStatus = {
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  WITHDRAWN: 'WITHDRAWN'
};

exports.ExamType = exports.$Enums.ExamType = {
  MIDTERM: 'MIDTERM',
  FINAL: 'FINAL'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PARTIAL_PAID: 'PARTIAL_PAID',
  FULL_PAID: 'FULL_PAID'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CASH: 'CASH',
  ONLINE: 'ONLINE'
};

exports.Prisma.ModelName = {
  AcademicSemester: 'AcademicSemester',
  AcademicFaculty: 'AcademicFaculty',
  AcademicDepartment: 'AcademicDepartment',
  Student: 'Student',
  Faculty: 'Faculty',
  Building: 'Building',
  Room: 'Room',
  Course: 'Course',
  CourseToPrerequisite: 'CourseToPrerequisite',
  CourseFaculty: 'CourseFaculty',
  SemesterRegistration: 'SemesterRegistration',
  OfferedCourse: 'OfferedCourse',
  OfferedCourseSection: 'OfferedCourseSection',
  OfferedCourseClassSchedule: 'OfferedCourseClassSchedule',
  StudentSemesterRegistration: 'StudentSemesterRegistration',
  StudentSemesterRegistrationCourse: 'StudentSemesterRegistrationCourse',
  StudentEnrolledCourse: 'StudentEnrolledCourse',
  StudentEnrolledCourseMark: 'StudentEnrolledCourseMark',
  StudentSemesterPayment: 'StudentSemesterPayment',
  StudentSemesterPaymentHistory: 'StudentSemesterPaymentHistory',
  StudentAcademicInfo: 'StudentAcademicInfo'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
