# addChara

Adds a character (unit) to a squad. Used for adding hatapon. Requires [readArcFile](./readarcfile.md) **and** [requestActor](./requestactor.md) to load the character.

## Code Information

- **Name**: `addChara`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 24 00`
- **Assembly Address in Memory** : `0x891bc80`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the character handle.
- `(int *)squad_handle` *(8 bytes)* : Handle of the squad.
- `(int)charaparam_id` *(8 bytes)* : Character ID in `charaparam`.

## Example

Here is one example in hex:

```25 16 24 00 / 04 00 00 00 / 36 00 00 00 / 04 00 00 00 / 35 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
addChara((int *)iVar54, (int *)iVar53, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891bc80(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1);
  if (((iVar4 != 0) && (iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4), iVar5 == 3)) &&
     (iVar4 = Param::ReadCharaParam(iVar4,*puVar3), iVar4 != 0)) {
    *piVar1 = (int)*(short *)(iVar4 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

