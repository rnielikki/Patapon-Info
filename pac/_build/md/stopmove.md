# stopMove

Stops the movement from the [movePosition](./moveposition.md)

## Code Information

- **Name**: `stopMove`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 3d 00`
- **Assembly Address in Memory** : `0x8915100`

## Parameters

- `(int *)handle` *(8 bytes)* : Handle value to stop the moving.
- `(float)delay` *(8 bytes)* : Delay time as seconds before stopping.

## Example

Here is one example in hex:

```25 17 3d 00 / 08 00 00 00 / 5b 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
stopMove(((global)int *)giVar91, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915100(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (((iVar3 != 0) && (*(int *)(iVar3 + 200) != 0)) &&
       (*(int *)(*(int *)(iVar3 + 200) + 0x1ec) != 0)) {
      FUN_0898426c(*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

