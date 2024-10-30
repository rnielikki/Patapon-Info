# changeScene

Change the scene, **potentially between overlay**.

## Code Information

- **Name**: `changeScene`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 02 00`
- **Assembly Address in Memory** : `0x8949710`

## Parameters

- `(int)scene_id` *(8 bytes)* : Expected to be 0, 1, 3, 4, 5, 6.

|`scene_id`|action|Loaded Overlay|
|---|---|
|0|No change|Mission|
|1|Title menu|Title|
|3|Loading screen|Title (???)|
|4|Hideout|Azito|
|5|Ending Screen|Title|


## Example

Here is one example in hex:

```25 0a 02 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
changeScene((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949710(int param_1,undefined4 param_2)

{
/* see also 0x088fd118 */
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_0884f334(*(int *)(param_1 + 0x10),*puVar1,3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

