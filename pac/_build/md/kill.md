# kill

Kills an unit (instadeath). Used for e.g. killing bonedeths after the structure is destroyed.

## Code Information

- **Name**: `kill`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 26 00`
- **Assembly Address in Memory** : `0x8913334`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit or squad handle, obtained from e.g. [getUnitHandle](./getunithandle.md) or [getUnitSquadHandle](./getunitsquadhandle.md).
- `(float)delay` *(8 bytes)* : Delay before dying, as seconds.
- `(float)Var2` *(8 bytes)* : Can keep as 0.

## Example

Here is one example in hex:

```25 17 26 00 / 04 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
kill((int *)iVar0, (float)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08913334(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 != 0) {
      (**(code **)(*(int *)(iVar4 + 4) + 0x88))(*puVar2,*puVar3,iVar4);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

