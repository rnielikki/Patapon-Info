# setDisableBeatGuide

Enables or disables the flashing beat border.

DoI disables the guide with this.

**This is separated from with system setting**.

## Code Information

- **Name**: `setDisableBeatGuide`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 0a 00`
- **Assembly Address in Memory** : `0x8970798`

## Parameters

- `(bool)set_delete_flag` *(8 bytes)*
  - If `set_delete_flag` is 0, it does `existing_value ~& beat_guide_flag`, otherwise it performs `existing_value | beat_guide_flag`(or), note the **disable flag is 1**.
- `(bool)beat_guide_flag` *(8 bytes)* : If this and 1st parameter are 1, the beat guide is disabled.
  - If 1st parameter is 0 and this is 0, it will preserve the current state. If 1st parameter is 0 and this is 1, it will forcefully enable rhythm border.

If **both** `set_delete_flag` `beat_guide_flag` are **set to 1**, the **beat guide is disabled**.

## Example

Here is one example in hex:

```25 0c 0a 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisableBeatGuide((int)1, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970798(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar3 != 0) {
    if (*piVar1 == 0) {
      func_0x08b5f6a8(iVar3,*puVar2);
    }
    else {
      func_0x08b5f680(iVar3,*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

