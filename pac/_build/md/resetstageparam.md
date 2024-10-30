# resetStageParam

World map related. Resets part of the current mission information when snaps out from the mission barracks.

## Code Information

- **Name**: `resetStageParam`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 15 00`
- **Assembly Address in Memory** : `0x8b4ec18`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)param_type` *(8 bytes)* : Expected 0~6. 0 description message, 1 title message. Please describe what others mean.
- `(Int/Float)Var2` *(8 bytes)* : Value to set.

## Example

Here is one example in hex:

```25 1c 15 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 05 00 00 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
resetStageParam((int)1, (int)5, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4ec18(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  float *pfVar2;
  uint uVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  float fVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar8 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar9 = *puVar1;
  pfVar2 = (float *)Pac_Get_Param(param_2,2,1,4);
  uVar3 = Pac_Get_ParamType(param_2,2);
  iVar4 = FUN_0883bc1c(param_2);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar5 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14),
      iVar5 != 0)) &&
     (iVar5 = FUN_Azito__08b5a618(*(undefined4 *)(iVar5 + 0x38),1,uVar8,1), iVar5 != 0)) {
    iVar6 = Save::Get_Save_BaseAddr(1);
    switch(uVar9) {
    case 0:
      if ((uVar3 & 0x70) == 0) {
        fVar7 = *pfVar2;
      }
      else {
        fVar7 = (float)(int)*pfVar2;
      }
      uVar8 = FUN_Azito__08b50680(param_1);
      uVar8 = Message::Get_Message(iVar6 + 0x98,uVar8,fVar7);
      *(undefined4 *)(iVar5 + 0xbc) = uVar8;
      break;
    case 1:
      if ((uVar3 & 0x70) == 0) {
        fVar7 = *pfVar2;
      }
      else {
        fVar7 = (float)(int)*pfVar2;
      }
      uVar8 = FUN_Azito__08b50680(param_1);
      uVar8 = Message::Get_Message(iVar6 + 0x98,uVar8,fVar7);
      *(undefined4 *)(iVar5 + 0xc0) = uVar8;
      break;
    case 2:
      if ((uVar3 & 0x70) == 0) {
        fVar7 = *pfVar2;
      }
      else {
        fVar7 = (float)(int)*pfVar2;
      }
      *(float *)(iVar5 + 0xd4) = fVar7;
      break;
    case 3:
      if ((uVar3 & 0x70) == 0) {
        fVar7 = (float)(int)*pfVar2;
      }
      else {
        fVar7 = *pfVar2;
      }
      *(float *)(iVar5 + 0xd8) = fVar7;
      break;
    case 4:
      if ((uVar3 & 0x70) == 0) {
        fVar7 = (float)(int)*pfVar2;
      }
      else {
        fVar7 = *pfVar2;
      }
      *(float *)(iVar5 + 0xdc) = fVar7;
      break;
    case 5:
      if ((uVar3 & 0x70) == 0) {
        fVar7 = *pfVar2;
      }
      else {
        fVar7 = (float)(int)*pfVar2;
      }
      *(bool *)(iVar5 + 0xe0) = fVar7 != 0.0;
      break;
    case 6:
      if ((uVar3 & 0x70) == 0) {
        fVar7 = *pfVar2;
      }
      else {
        fVar7 = (float)(int)*pfVar2;
      }
      *(int *)(iVar5 + 0xac) = iVar4 + (int)fVar7;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

