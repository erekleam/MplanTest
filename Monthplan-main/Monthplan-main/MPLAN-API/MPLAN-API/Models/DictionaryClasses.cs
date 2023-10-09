
using MPLAN_API.Core.Constants;
using System;
using System.Collections.Generic;
using System.Globalization;

namespace MPLAN_API.Models
{
    public class DictionaryClasses
    {
        public Mplan_Header? Header { get; set; }
        /*public Mplan_Countries? MplanCountries { get; set; }*/
        public Mplan_Details? Details{ get; set; }
       



    }

    public class Mplan_Header
    {
      public int StatementType { get; set; }
      public string FileType { get; set; } = string.Empty;
      public DateTime dateFrom { get; set; }
      public string LoadType { get; set; } = string.Empty;
      public string senderCountry { get; set; } = string.Empty;
      public string senderCountryText { get; set; } = string.Empty;

      public string senderStation { get; set; } = string.Empty;
      public string senderStationText { get; set; } = string.Empty;
      public string ReceiverCountry { get; set; } = string.Empty;
      public string ReceiverCountryText { get; set; } = string.Empty;
      public string ReceiverStation { get; set; } = string.Empty;
      public string ReceiverStationText { get; set; } = string.Empty;
      public string LoadSender { get; set; } = string.Empty;
      public string LoadSenderText { get; set; } = string.Empty;

      public string LoadReciever { get; set; } = string.Empty;
      public string LoadRecieverText { get; set; } = string.Empty;
      public string PortLoadReciever { get; set; } = string.Empty;
      public string PortLoadRecieverText { get; set; } = string.Empty;
      public string Port { get; set; } = string.Empty;
      public string PortText { get; set; } = string.Empty;
      public string gzavnilisSaxeoba { get; set; } = string.Empty;
      public string tvirtiGNG { get; set; } = string.Empty;
      public string tvirtiGNGText { get; set; } = string.Empty;
      public int tvirtiWona { get; set; }
      public string Nishani { get; set; } = string.Empty;
      public string VagonisSaxeoba { get; set; } = string.Empty;
      public string VagonisRaodenoba { get; set; } = string.Empty;
      public string konteinerisZoma { get; set; } = string.Empty;
      public int konteinerisRaodenoba { get; set; }
      public string FeedbackNote { get; set; } = string.Empty;
    }

    /*public class MplanCountries
    {
        

        public IReadOnlyCollection<mestran> Mestran { get; set; } = Array.Empty<mestran>();


    }*/
    public class Mplan_Details
    {
        public string transportingAdministrationCode { get; set; } = string.Empty;
        public string transportingAdministration { get; set; } = string.Empty;
        public string ReceiverdockingCode { get; set; } = string.Empty;
        public string ReceiverdockingSpot { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
        public string Forwarder { get; set; } = string.Empty;

    }

  
}
