import { TbCalendarEvent } from "react-icons/tb";

const Posts = () => {
  return (
    <ul>
      <li className="my-6">
        <h3 className="font-medium text-lg text-mandarin">
          Unlocking Creativity: My Journey as a Designer
        </h3>
        <div className="flex items-center pt-2">
          <TbCalendarEvent className="inline" size={20} />
          <time dateTime="2021-08-01" className="ml-2 text-sm italic">
            August 1, 2021
          </time>
        </div>
        <p className="pt-2 text-base text-gray-600">
          &quot;Navigating the UX/UI Landscape: Lessons Learned&quot; dives into
          the intricacies of user experience (UX) and user interface (UI)
          design, offering a reflective journey through challenges and triumphs.{" "}
        </p>
      </li>
      <li className="my-6">
        <h3 className="font-medium text-lg text-mandarin">
          Mastering the Art of Web Development: Insights from My Projects
        </h3>
        <div className="flex items-center pt-2">
          <TbCalendarEvent className="inline" size={20} />
          <time dateTime="2021-08-01" className="ml-2 text-sm italic">
            August 1, 2021
          </time>
        </div>
        <p className="pt-2 text-base text-gray-600">
          &quot;Navigating the UX/UI Landscape: Lessons Learned&quot; dives into
          the intricacies of user experience (UX) and user interface (UI)
          design, offering a reflective journey through challenges and triumphs.{" "}
        </p>
      </li>
      <li className="my-6">
        <h3 className="font-medium text-lg text-mandarin">
          Navigating the UX/UI Landscape: Lessons Learned
        </h3>
        <div className="flex items-center pt-2">
          <TbCalendarEvent className="inline" size={20} />
          <time dateTime="2021-08-01" className="ml-2 text-sm italic">
            August 1, 2021
          </time>
        </div>
        <p className="pt-2 text-base text-gray-600">
          &quot;Navigating the UX/UI Landscape: Lessons Learned&quot; dives into
          the intricacies of user experience (UX) and user interface (UI)
          design, offering a reflective journey through challenges and triumphs.{" "}
        </p>
      </li>
    </ul>
  );
};

export default Posts;
