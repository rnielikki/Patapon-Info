# getFacilityInfo

Gets certain information of a selectable hideout gimmick(facility).

## Code Information

- **Name**: `getFacilityInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 0c 00`
- **Assembly Address in Memory** : `0x8b4dc50`

## Parameters

- `(int)facility_type` *(8 bytes)* : [Facility ID](./guide/reference-table.md#facility-ids).
- `(int)info_type` *(8 bytes)* : Range of *0~4*.
- `(uint *)destination` *(8 bytes)* : Variable to *store* the result.

|`info_type`|meaning|
|---|---|
|0|[Facility ID](./guide/reference-table.md#facility-ids)|
|1|facility **gimmick handle**|
|2|1 enables selection, let this 1 and editing 4 is preferred|
|3|1 enables interaction (action on X)|
|4|1 can be selected|

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4dc50(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar4 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *piVar1;
  puVar2 = (uint *)Pac_Get_Param(param_2,2,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar4 = *(int *)(iVar4 * 0x10 + *(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x1e0),
     iVar4 != 0)) {
    if (iVar3 == 4) {
      *puVar2 = (uint)*(byte *)(iVar4 + 0x142);
    }
    else if (iVar3 == 3) {
      *puVar2 = (uint)*(byte *)(iVar4 + 0x141);
    }
    else if (iVar3 == 2) {
      *puVar2 = (uint)*(byte *)(iVar4 + 0x9c);
    }
    else if (iVar3 == 1) {
      if (*(int *)(iVar4 + 0x148) != 0) {
        *puVar2 = (int)*(short *)(*(int *)(iVar4 + 0x148) + 0x78);
      }
    }
    else if (iVar3 == 0) {
      *puVar2 = (int)*(short *)(iVar4 + 0x78);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

