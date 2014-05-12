jQuery Conditional Form Fields
==============================

## What it Does
Shows and hides designated form fields based on the current value of a single select element that you designate.

## How it Works

  1. Designate the control element with the 'data-conditional-select-control' attribute. It must be a select element.
  2. Mark each element you want shown or hidden by giving it the `'data-show-for=VALUE'` attribute, where `VALUE` matches the value of the option element inside the control selector.
  3. Initialize the plugin on the control selector's parent:
          $('.my-conditional-fields').conditionalFields();
  4. Now any elements you've designated will only be visible when the corresponding select option is selected.
