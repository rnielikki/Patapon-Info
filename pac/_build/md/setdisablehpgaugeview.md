# setDisableHpgaugeView

Disables stamina view on the top left during PVE Mission.

Can be used when e.g. story/guide before actually starting the mission (Archfiend of Restraint 1st floor).

## Code Information

- **Name**: `setDisableHpgaugeView`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 99 00`
- **Assembly Address in Memory** : `0x89223e0`

## Parameters

- `(bool)set_delete_flag` *(8 bytes)*
  - If `set_delete_flag` is 0, it does `existing_value ~& hp_gauge_flag`, otherwise it performs `existing_value | hp_gauge_flag`(or), note the **disable flag is 1**.
- `(bool)hp_gauge_flag` *(8 bytes)* : If this and 1st parameter are 1, the beat guide is disabled.
  - If 1st parameter is 0 and this is 0, it will preserve the current state. If 1st parameter is 0 and this is 1, it will forcefully enable HP gauge.

If **both** `set_delete_flag` `hp_gauge_flag` are **set to 1**, the **HP gauge is disabled**.

## Example

Here is one example in hex:

```25 16 99 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisableHpgaugeView((int)1, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089223e0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar3 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x44),
     iVar3 != 0)) {
    if (*piVar1 == 0) {
      func_0x08b32628(iVar3,*puVar2);
    }
    else {
      func_0x08b32618(iVar3,*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

