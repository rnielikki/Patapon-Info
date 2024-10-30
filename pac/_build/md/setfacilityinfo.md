# setFacilityInfo

Sets certain information of a selectable hideout gimmick(facility).

## Code Information

- **Name**: `setFacilityInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 0d 00`
- **Assembly Address in Memory** : `0x8b4dd78`

## Parameters

- `(int)facility_type` *(8 bytes)* : [Facility ID](./guide/reference-table.md#facility-ids).
- `(int)info_type` *(8 bytes)* : Range of *2~4* (note that 0 and 1 are not allowed).
- `(bool)value` *(8 bytes)* : Value to set as given info type.

|`info_type`|meaning|
|---|---|
|2|1 enables selection, let this 1 and editing 4 is preferred|
|3|1 enables interaction (action on X)|
|4|1 can be selected

## Example

Here is one example in hex:

```25 1c 0d 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 04 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setFacilityInfo((int)0, (int)4, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4dd78(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar2 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,2,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar3 = *(int *)(iVar3 * 0x10 + *(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x1e0),
     iVar3 != 0)) {
    iVar4 = *(int *)(iVar3 + 0x148);
    if (iVar2 == 4) {
      *(bool *)(iVar3 + 0x142) = *piVar1 != 0;
    }
    else if (iVar2 == 3) {
      *(bool *)(iVar3 + 0x141) = *piVar1 != 0;
    }
    else if ((iVar2 == 2) &&
            ((**(code **)(*(int *)(iVar3 + 4) + 0x58))(iVar3,*piVar1 != 0), iVar4 != 0)) {
      (**(code **)(*(int *)(iVar4 + 4) + 0x58))(iVar4,*piVar1 != 0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

