# getStatusInfo

Gets stamina information of a target.

## Code Information

- **Name**: `getStatusInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 24 00`
- **Assembly Address in Memory** : `0x8913178`

## Parameters

- `(int *)handle` *(8 bytes)* : Handle of the target to get the stamina information.
- `(int *)data_type` *(8 bytes)* : Expected 0~2. 0 gives max stamina (int), 1 gives current stamina (int), 2 gives stamina rate (float).
- `(int/float *)destination` *(8 bytes)* : Variable to *store* the stamina information. If `data_type` is 2, float is expected.

## Example

Here is one example in hex:

```25 17 24 00 / 08 00 00 00 / 1f 00 00 00 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getStatusInfo(((global)int *)giVar31, (int)1, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08913178(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  float *pfVar3;
  int iVar4;
  float *pfVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  if (param_1 == 0) {
    pfVar5 = (float *)0x0;
  }
  else {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 == 0) {
      pfVar5 = (float *)0x0;
    }
    else {
      pfVar5 = *(float **)(iVar4 + 0xcc);
      if (pfVar5 == (float *)0x0) {
        pfVar5 = (float *)0x0;
      }
    }
  }
  if (pfVar5 != (float *)0x0) {
    iVar4 = *piVar2;
    if (iVar4 == 0) {
      *pfVar3 = *pfVar5; //max stamina
    }
    else if (iVar4 == 1) {
      *pfVar3 = pfVar5[1]; //current stamina
    }
    else if (iVar4 == 2) {
      *pfVar3 = (float)(int)pfVar5[1] / (float)(int)*pfVar5; //stamina percentage
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

