# README

```
python -m http.server 8000
```

## Template `config.json`

```{json}
{
  "EVENT_PATCHES_PATH":"<path_to_event_patches>",
  "EVENTS":[
    {
      "includeString": "<search_string>",
      "defaultVersion": "<version_number>",
      "filePathHead": "<file_name_before_version_number>"
    }
  ]
}
```

## FAQ

### How to choose an event patch?

1. Make sure to create a file called `config.json` and copy-paste the respective template. One has the option to use any server or by creating a local directory called `event_patches`.
2. Make sure to adjust/add the various event types.
3. Event patches are only used if the event in `data.json` has the key `patchVersion` and non-empty value, empty string is permitted.
